import Lenovo from "./Lenovo";

const Hp = () =>{
    let ark = 100;
    console.log(ark);

    return(
        <div className="hp">
            <h1>I am a Component</h1>
            <b>The ark is : {ark}</b>
            <Lenovo data = {ark}></Lenovo>
        </div>
    )
}

export default Hp;