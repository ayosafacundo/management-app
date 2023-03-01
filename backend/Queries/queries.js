import pg from 'pg';
const Pool = pg.Pool;

const pool = new Pool({
    user: "api",
    host: "localhost",
    database: "ClaymoreUniversity",
    password: "isApiConnected",
    port: "5432"
})

export default pool;