import './Car.css'

let Car = () =>{

    let count = 22;
    console.log(count);
    function increment(){
        count = count+ 1;
        console.log(count);    
    }

    function view(bike){
        console.log("This is a bike " + bike);
        
    }
    
    return(
        <div className="car">
            <h1>Count the number: {count}</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={()=>{view("NS220")}}>Bike</button>
            <br /><br />
        <img src="https://m.media-amazon.com/images/S/pv-target-images/8e480c4c60825cbbb78c6b0c2948a980d3f2c26776fb59f731ee0d39e04e4333._SX1080_FMjpg_.jpg" alt="Car Image" />

        <h1 style={{backgroundColor:"green" , color:"white"}}>Car is a vehicle in react</h1>
    </div>
    )
}
export default Car