const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "root123",
	database: "EmployeeManagement",
});

app.post("/insert", (req, res) => {
	const id = req.body.id;
	const name = req.body.name;
	const role = req.body.role;
	const salary = req.body.salary;

	db.query("INSERT INTO info (id,name,role,salary) VALUES (?,?,?,?)", [id, name, role, salary], (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Values Inserted");
			res.send("Inserted Values");
		}
	});
});

app.post("/drop", (req, res) => {
	const id = req.body.id;

	db.query("DELETE FROM info WHERE info.id = ?", [id], (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Values Deleted");
			res.send("Delted Values");
		}
	});
});

app.get("/get", (req, res) => {
	db.query("SELECT * FROM info", (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Values Retrieved");
			res.send(result);
		}
	});
});

app.listen(3001, () => {
	console.log("3001 up and running");
});
