import React from "react"
import { useRef } from "react";

export default function Compo2(){

let data = useRef()
let phone = useRef()
function print() {
    console.log(data.current.value);
    console.log(phone.current.value);
}

    return(
        <div className="compo2">
            <label htmlFor="">Name: </label>
            <input type="text" ref={data} placeholder="Enter"/>
            <label htmlFor="">Phone: </label>
            <input type="text" ref={phone} placeholder="Enter"/>
            <button onClick={print}>Submit</button>
            <button>help
                
            </button>
        </div>       

    )
}

