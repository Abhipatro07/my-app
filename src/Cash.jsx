import {useState} from "react"

const Cash = () => {
    let [num , setnum] = useState(0);
    console.log(num);

    function count() {
        setnum(num++);
        console.log(num);               
    }

    return(
        <div className="count">
            <h1>The total cash: {num}</h1>
            <button onClick={count}>Cash</button>
        </div>
    )
}

export default Cash


