import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export default ({ location, employee, animal }) => (
    <section className="location">
        <h3 className="location__name">
            <Link to = {`/${location.id}`}>
            {location.name}
            </Link>
            </h3>
        {/* <div className="location__address">{location.address}</div> */}
        <div className="location__employeeNumber">{employee.length} employees</div>
        <div className="location__animalNumber">{animal.length} animals</div>
    </section>
)