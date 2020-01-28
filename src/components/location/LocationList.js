import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import "./Location.css"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"

export default (props) => {
    const { locations } = useContext(LocationContext) || {}
    const { employees } = useContext(EmployeeContext) || {}
    const { animals } = useContext(AnimalContext) || {}
    console.log(locations)

    return (
        <div className="locations">
        {
            locations.map(loc => {
                const employee = employees.filter(e => e.locationId === loc.id)
                const animal = animals.filter(a => a.locationId === loc.id)
                
                return <Location key={loc.id} 
                location={loc}
                employee={employee} 
                animal={animal}
            />})
            }
        }
        </div>
    )
}