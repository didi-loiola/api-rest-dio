import { Pool } from "pg";

const connectionString = process.env.STRINGCONNECTION;
const db = new Pool({ connectionString })

export default db;