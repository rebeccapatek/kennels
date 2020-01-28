import React, { useContext,useRef } from "react"

import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"



export default props => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const AnimalName = useRef("")
    const AnimalLocation = useRef(0)
    const AnimalBreed = useRef("")
 
    //Construct a new object representation of the new employee from the user input
    const constructNewAnimal = () => {
        const locationId = parseInt(AnimalLocation.current.value)
        
    
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimal({
                name: AnimalName.current.value,
                locationId: locationId,
                breed: AnimalBreed.current.value,
                customerId: parseInt(localStorage.getItem("kennel_customer"))

            })
            //Immediately update the application state with the new array of employees that are in the API
            .then(() => props.history.push("/animals"))
        }
    }


    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <div className="form-group">
                <label htmlFor="AnimalName">Animal name</label>
                <input
                    type="text"
                    id="AnimalName"
                    ref={AnimalName}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Animal name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="AnimalBreed">Breed</label>
                <input
                    type="text"
                    id="AnimalBreed"
                    ref={AnimalBreed}
                    required
                    className="form-control"
                    placeholder="Animal breed"
                />
            </div>
            <div className="form-group">
                <label htmlFor="location">Assign to location</label>
                <select
                    defaultValue=""
                    name="location"
                    ref={AnimalLocation}
                    id="AnimalLocation"
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
                    constructNewAnimal()
                     }
                    }
                     className="btn btn-primary">
                    Make Reservation
            </button>
        </form>
    )
}