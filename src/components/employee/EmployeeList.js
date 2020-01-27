import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import "./Employee.css"
import { LocationContext } from "../location/LocationProvider"



export default props => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
  
    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employeeList">
                {employees.map(employee => {
                    const location = locations.find(l => l.id === employee.locationId)
                    console.log(location)
                    return <Employee key={employee.id} 
                    location={location}
                    employee={employee} />})}
            </article>
        </div>
    )
}