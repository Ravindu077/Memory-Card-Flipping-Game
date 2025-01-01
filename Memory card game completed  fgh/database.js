var mysql =require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "memorygame",
})

const auth = getAuth();
const user = auth.getCurrentUser();
const userID = user.uid;

const sql = 'INSERT INTO user_details (userID) VALUES (?)';
const values = [userID];


connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('User ID stored in SQL database:', userID);
    }
  });