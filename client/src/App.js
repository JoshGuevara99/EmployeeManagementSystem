import "./App.css";
import React, { useState } from "react";
import Axios from "axios";
import EmployeeItem from "./Components/EmployeeItem";

function App() {
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [role, setRole] = useState("");
	const [salary, setSalary] = useState("");
	const [employees, setEmployees] = useState([]);
	function addEmployee() {
		console.log(id, name, role, salary);
		Axios.post("http://localhost:3001/insert", { id: id, name: name, role: role, salary: salary }).then(() => {
			console.log("success");
		});
		setId("");
		setName("");
		setRole("");
		setSalary("");
		getEmployees();
	}

	function getEmployees() {
		Axios.get("http://localhost:3001/get").then((response) => {
			setEmployees(response.data);
			console.log(employees);
		});
	}

	return (
		<div className="App">
			<div className="left-page">
				<div className="form">
					<h4>ID:</h4>
					<input
						value={id}
						onChange={(event) => {
							setId(event.target.value);
						}}
						type="text"
					/>
					<h4>Name:</h4>
					<input
						value={name}
						onChange={(event) => {
							setName(event.target.value);
						}}
						type="text"
					/>
					<h4>Role:</h4>
					<input
						value={role}
						onChange={(event) => {
							setRole(event.target.value);
						}}
						type="text"
					/>
					<h4>Salary:</h4>
					<input
						value={salary}
						onChange={(event) => {
							setSalary(event.target.value);
						}}
						type="text"
					/>
					<button
						onClick={() => {
							addEmployee();
						}}>
						Add Employee
					</button>
					<button onClick={getEmployees}>Show Employees</button>
				</div>
			</div>
			<hr className="line" />
			<div className="right-page">
				{employees.map((employee) => {
					return (
						<EmployeeItem
							key={employee.id}
							onDelete={() => {
								getEmployees();
							}}
							id={employee.id}
							name={employee.name}
							role={employee.role}
							salary={employee.salary}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
