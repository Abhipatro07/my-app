const { useEffect, useState } = require("react");

function Items() {
    let [item,setitem] = useState([]);

    useEffect(() => {
        async function fetchdata() {
            let data = await fetch('http://localhost:2000/Items');
            let res = await data.json();
            setitem(res);            
        }
        fetchdata();
    } , []);

    console.log(item);

    return(
        <div className="item">
            {item.map((x) =>{
                <div className="sub">
                    <img src={x.image} alt="" />
                    <h2>{x.name}</h2>
                    <h1>{x.price}</h1>
                </div>
            })}        
        </div>
    )
}

export default Items;

