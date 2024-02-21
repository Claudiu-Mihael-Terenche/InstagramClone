import mysql from "mysql"

export const db = mysql.createConnection({
  host:"database-2.cfsaq26ccihh.us-east-2.rds.amazonaws.com",
  user:"admin",
  password:"6DWN7JVn0ENIVr94QWw0Q5",
  database:"social",
  port: "3306"
})