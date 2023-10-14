import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
export default function 
() {

    const [employees,setEmployees] = useState([]);
   
    useEffect(() => {
      axios.get("http://localhost:8080/employee/getAllEmployees")
      .then(response => {
        setEmployees(response.data);
      })
      .catch(() => {
        console.error('Une erreur s\'est produite ');
      });    });
  
  const deleteEmployee = (id)=>{
    axios.delete(`http://localhost:8080/employee/${id}`)

  }

  return (
    <div className='container'>
<div className='py-4'> 
<table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
      employees.map((employee,index)=>(
        <tr>
        <td >{employee.name}</td>
        <td>{employee.username}</td>
        <td>{employee.email}</td>
        <td> 
        <Link
                    className="btn btn-primary mx-2"
                    to={`/viewEmployee/${employee.id}`}
                  >
                    View
                  </Link>
          <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editEmployee/${employee.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                  </td>
      </tr>
      ))
    }
   
  </tbody>
</table>
</div>
    </div>
  )
}
