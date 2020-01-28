import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"

import Animal from "./Animal"
import "./Animal.css"

export default (props) => {
    const { animals } = useContext(AnimalContext)


    return (
        <>
        <h1>Animals</h1>

        <button onClick={() => props.history.push("/animals/create")}>
                Make Reservation
        </button>
        <div className="animals">
            {animals.map(animal => {
                // const owner = customers.find(c => c.id === animal.customerId)
                // const clinic = locations.find(l => l.id === animal.locationId)

                return <Animal key={animal.id}
                // location={clinic}
                // customer={owner}
                animal={animal} />
            })}
        </div>
        </>
    )
}