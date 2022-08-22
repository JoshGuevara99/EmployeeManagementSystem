import React from "react";
import "/Users/joshuaguevara/Desktop/ReactProjects/EmployeeSystem/client/src/App.css";
import Axios from "axios";
function EmployeeItem(props) {
	function deleteEmployee(id) {
		Axios.post("http://localhost:3001/drop", { id: id }).then(() => {
			console.log(id);
		});
		props.onDelete();
	}
	return (
		<div className="row">
			<button
				className="delete-button"
				onClick={() => {
					deleteEmployee(props.id);
				}}>
				X
			</button>
			<p>{props.id}</p>
			<p>{props.name}</p>
			<p>{props.role}</p>
			<p>{props.salary}</p>
		</div>
	);
}

export default EmployeeItem;
