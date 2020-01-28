import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export default ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">
            <Link to = {`/animals/${animal.id}`}>
            {animal.name}
            </Link>
            </h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        {/* <div className="animal__customer">Customer: {customer.name}</div>
        <div className="animal__location">Location: {location.name}</div> */}

    </section>
)

