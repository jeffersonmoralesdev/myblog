import dotenv from'dotenv'; 
dotenv.config();
import {drizzle} from "drizzle-orm/mysql2"
import mysql from "mysql2/promise"
import * as schema from "./schemas"

const pollConnection =  mysql.createPool({
    host:process.env.DB_HOST!,
    user:process.env.DB_USER!,
    database:process.env.DB_DATABASE!,
    password:process.env.DB_PASSWORD!,

    
})

export const db = drizzle(pollConnection,{schema,mode:"default",logger:true})

