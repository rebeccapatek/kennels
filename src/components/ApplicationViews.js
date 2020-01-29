import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import { CustomerProvider} from "./customer/CustomerProvider"
import CustomerList from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import EmployeeList from "./employee/EmployeeList"
import EmployeeForm from "./employee/EmployeeForm"
import AnimalForm from "./animal/AnimalForm"
import AnimalDetails from "./animal/AnimalDetails"
import LocationDetails from  "./location/LocationDetails"


export default (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <AnimalProvider>
                    <EmployeeProvider>
                        <CustomerProvider>
                            <Route exact path="/">
                                <LocationList />
                            </Route>
                            <Route exact path="/:locationId(\d+)" render={
                            props => <LocationDetails {...props} />
                            } />
                        </CustomerProvider>
                    </EmployeeProvider>
                </AnimalProvider>
            </LocationProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals" render={
                            props => <AnimalList {...props} />
                        } />
                        <Route exact path="/animals/create" render={
                        props => <AnimalForm {...props} />
                        } />
                            <Route path="/animals/:animalId(\d+)" render={
                        props => <AnimalDetails {...props} />
                        } />
                        <Route path="/animals/edit/:animalId(\d+)" render={
                            props => <AnimalForm {...props} />
                        } />
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>
            
            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
            
            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees" render={
                    props => <EmployeeList {...props} />
                } />

                    <Route path="/employees/create" render={
                    props => <EmployeeForm {...props} />
                } />
                
                 </LocationProvider>
            </EmployeeProvider>
        </>
    )
}