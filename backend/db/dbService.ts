import { Client, Pool, PoolConfig, QueryConfig } from 'pg';
import { readFileSync } from 'fs';
import bcrypt from 'bcrypt';
import { GetUsersQuery } from './@types/querys.js';
import { Gender, User } from './@types/models/users.js';
import { Err, Ok, Option, Result } from 'rustic';

const UserTables = readFileSync('./db/Tables/users.psql').toString();

export default class Database {
  private pool: Pool;
  constructor(poolParams?: PoolConfig) {
    this.pool = new Pool(poolParams);
  }

  private async safeQuery(query:string): Promise<Option<any[]>> {
    const client = await this.pool.connect();
    let ans;
    try {
      await client.query("BEGIN")
      ans = await client.query(query);
      await client.query("COMMIT");
    } catch (err) {
      await client.query("ROLLBACK");
      return null;
    }
    client.release();
    return ans.rows;
  }

  public async createDB() {
    await this.pool.query(`DO $$ 
      DECLARE 
          r RECORD;
      BEGIN 
          FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
              EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
          END LOOP; 
      END $$;`)
    this.createUsers();
  }

  private async createUsers() {
    try {
      this.pool.query(`
        CREATE OR REPLACE FUNCTION update_updatedat_column()  
        RETURNS TRIGGER AS $$  
        BEGIN  
            NEW.updatedat = CURRENT_TIMESTAMP;  
            RETURN NEW;  
        END;  
        $$ LANGUAGE plpgsql;`);
      this.pool.query(UserTables);
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Get list of users
   * @param limit Amount of users to get
   * @param offset Amount of users to offset
   * @param role Filter users by role
   * @param email Filter users by email
   * @param gender Filter users by gender
   */
  public async getUsers({ limit, offset, role, email, gender }: GetUsersQuery) {
    let limitQuery = ""
    let filterQuerys = [];
    if (limit != undefined && limit <= 80 && limit > 0) {
      limitQuery = `LIMIT ${limit}`;
      if (offset != undefined && offset > 0) {
        limitQuery += ` OFFSET ${offset};`;
      }
    } else {
      limitQuery = 'LIMIT 10';
    }
    if (role != undefined) {
      filterQuerys.push(`r.rolename = '${role}'`);
    }
    if (email != undefined) {
      filterQuerys.push(`u.email = '${email}'`);
    }
    if (gender != undefined) {
      filterQuerys.push(`u.gender = '${gender.toString()}'`);
    }
    let fullquery = `SELECT   
        u.userid AS id,  
        u.firstname,  
        u.lastname,  
        u.email,  
        u.gender,  
        u.passwordhash,
        r.rolename AS role,  
        ARRAY_AGG(p.permissionname) AS permissions  
    FROM   
        users u  
    LEFT JOIN   
        roles r ON u.roleid = r.roleid  
    LEFT JOIN   
        rolepermissions rp ON r.roleid = rp.roleid  
    LEFT JOIN   
        permissions p ON rp.permissionid = p.permissionid
    `;
    if (filterQuerys.length > 0) {
      fullquery += "WHERE (" + filterQuerys.join(" AND ") + ")"
    }
    fullquery +=`
    GROUP BY   
        u.userid, u.firstname, u.lastname, u.email, u.gender, r.rolename, u.passwordhash
    `;
    fullquery += limitQuery;
    fullquery += `;`;
    return await this.safeQuery(fullquery);
  }

  public cleanInputs(input: string) {
    return input.replace("\'", "");
  }

  public hashpassword(password: string) {
    let hashed;
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) console.error(err);
        hashed = hash;
      });
      if (err) console.error(err);
    });
    return hashed;
  }

  /**
   * Adds an user to the DB
   * @param firstname string, firstname
   * @param lastname string, lastname
   * @param email string, email
   * @param gender gender, gender
   * @param rolename string, rolename
   * @param password string, password
   * @returns 
   */
  public async addUser({firstname, lastname, email, gender, rolename, password}:User): Promise<Result<any[], string>> {
    let roleid;
    let usersWithEmail = await this.safeQuery(`SELECT u.email FROM users u WHERE (u.email = ${this.cleanInputs(email.toString())})`);
    if (usersWithEmail != null) {
      return Err("User with same email already registered.");
    }
    if (rolename != undefined){
      roleid = await this.safeQuery(`SELECT r.roleid FROM roles r WHERE (r.rolename = ${this.cleanInputs(rolename.toString())})`)
    } else {
      roleid = null;
    }
    let ans = await this.safeQuery(`INSERT INTO users (firstname, lastname, email, gender, passwordhash, roleid, active, createdat, updatedat)
        VALUES (
        '${this.cleanInputs(firstname)}',
        '${this.cleanInputs(lastname)}',
        '${this.cleanInputs(email)}',
        '${Gender[gender]}',
        '${this.hashpassword(this.cleanInputs(password))}',
        ${roleid ? "'" + this.cleanInputs("" + roleid) + "'" : 'NULL'},
        true,
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP)`);
    if (ans != undefined) {
      return Ok(ans);
    } else {
      return Err("idk what happened, undefined something?")
    }
  }

}
