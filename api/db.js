import mysql from "mysql";


export const db = mysql.createConnection({
    host: '127.0.0.1',
    user: "sqluser",
    password: "password",
    database: "blog"
});

db.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connection to database successful!');
});