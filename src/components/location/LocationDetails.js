import React, { useContext } from "react"
import { AnimalContext } from "../animal/AnimalProvider"
import "./Location.css"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"

export default (props) => {
    const {locations} = useContext(LocationContext)
    const {animals} = useContext(AnimalContext)
    const {employees} = useContext(EmployeeContext)

    const chosenLocationId = parseInt(props.match.params.locationId, 10)

    const location = locations.find(l => l.id === chosenLocationId) || {}
    const employee = employees.filter(e => e.locationId === location.id) || {}
    const animal = animals.filter(a => a.locationId === location.id) || {}
 console.log(employee)
 console.log(animal)
    return (
        <section className="location">
            <h2 className="location__name">{ location.name }</h2>
            <div className="animal__list">Currently caring for:  {animal.map(a => (
                <p>{a.name},</p>
            )
            )} </div>
            <div className="employee__list">We currently have { employee.length } well-trained animal lovers:
            {employee.map(e => (
                <p>{e.name}</p>
            ))}</div>
        </section>
    )
}