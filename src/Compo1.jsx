import React from 'react'
import Compo2 from './Compo2.jsx'
import Car from './Car.jsx'
function Compo1(){
    console.log("Welcome ");
    
    return(
        <React.Fragment>
            <Car></Car>
            <h1>Hello</h1>
            <button className='btn btn-outline-success p-5 m-5'>Submit</button>
            <br /><br />

        </React.Fragment>

    )
}
export default Compo1