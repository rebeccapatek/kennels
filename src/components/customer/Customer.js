import React from "react"
import "./Customer.css"

export default ({ customer }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__location">{customer.email}</div>
    </section>
)

