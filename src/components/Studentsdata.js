import { useEffect, useState } from "react";

const Studentsdata = () => {


    const[name,setname] = useState([])

    useEffect(()=>{
        async function ApiData () {
            const response = await fetch("http://localhost:8000/students")
           // console.log(response);
            const result = await response.json();
          //  console.log(result);
            setname(result)
            
        }
        ApiData();
    },[])
   
    return (
        <>
            <hr/>
            <h1>I am a Studentsdata Demo</h1>
            {
                name.map(d=>{
                    return(
                        <div>
                            Name : {d.name} <br/>
                            Image : <img src={d.avatar}/>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Studentsdata;