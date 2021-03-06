import React, { useContext,useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"


export default props => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    const employeeName = useRef("")
    const employeeLocation = useRef(0)
    //Construct a new object representation of the new employee from the user input
    const constructNewEmployee = () => {
        const locationId = parseInt(employeeLocation.current.value)
    
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee({
                name: employeeName.current.value,
                locationId: locationId
            })
            //Immediately update the application state with the new array of employees that are in the API
            .then(() => props.history.push("/employees"))
        }
    }


    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <div className="form-group">
                <label htmlFor="employeeName">Employee name</label>
                <input
                    type="text"
                    id="employeeName"
                    ref={employeeName}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Employee name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="location">Assign to location</label>
                <select
                    defaultValue=""
                    name="location"
                    ref={employeeLocation}
                    id="employeeLocation"
                    className="form-control"
                >
                    <option value="0">Select a location</option>
                    {locations.map(e => (
                        <option key={e.id} value={e.id}>
                            {e.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit"
                    onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                    constructNewEmployee()
                     }
                    }
                     className="btn btn-primary">
                    Save Employee
            </button>
        </form>
    )
}