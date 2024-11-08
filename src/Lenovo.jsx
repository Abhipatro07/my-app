import Dell from './Dell'

function Lenovo(props) {
    console.log(props);
    let b = props.data;
    console.log(b);

    return(
        <div>
            <h1>I am a Lenovo Compnent : {b}</h1>
            <Dell c= {b}></Dell>
        </div>
    )    
}

export default Lenovo