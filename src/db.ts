import { Pool } from "pg";
require('dotenv').config();

const connectionString = process.env.STRINGCONNECTION;
const db = new Pool({ connectionString })

export default db;