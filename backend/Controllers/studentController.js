import { response } from "express";
import pool from "../Queries/queries.js";
import generateEmail from '../Services/generateEmail.js';

const emailExists = (email) => {
    pool.query('SELECT * FROM student WHERE email = $1', [email], (error, results) => {
        if (error) {
            throw error

        }
        if (results.rows.length != 0) {
            return true
        }
        return false
    })
}

/**
 * 
 * @param { firstname, middlename, lastname, sex, ssn, dob, currentaddress, currentphoneno, email} req 
 * @param {*} res 
 */

const registerStudent = (req, res) => {

    const { firstname, middlename, lastname, sex, ssn, dob, currentaddress, currentphoneno, email } = req;
    if (!email) {
        email = generateEmail(firstname, lastname);
        if (emailExists(email)) {
            email = generateEmail(lastname, firstname);
        }
        if (emailExists(email) && middlename) {
            email = generateEmail(middlename, lastname);
        }
        if (emailExists(email)) {
            response.status(409);
        }
    }
    pool.query('SELECT * FROM student WHERE ssn = $1', [ssn], (error, results) => {
        if (error) {
            throw error
        }
    })

    pool.query('INSERT INTO student (firstname, middlename, lastname, sex, ssn, dob, currentaddress, currentphoneno, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [firstname, middlename, lastname, sex, ssn, dob, currentaddress, currentphoneno, email], (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows);
        response.status(200).send(`Student added with ID: ${results.rows[0].id}`)
    })

}

export default registerStudent;