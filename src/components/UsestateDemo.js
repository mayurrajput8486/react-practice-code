import { useState } from "react";

const UsestateDemo = () => {


    const [name,setname] = useState("Reactjs");
    const [email,setemail] = useState("react@gmail.com");
    const [owner,setowner] = useState("Facebook");
  
    function stateHandler () {
        setname("Angular");
        setemail("angular@gmail.com");
        setowner("Google")
    }

    return(
        <>
            <h1>I am a Usestate Demo</h1>
            <h2>
                Name : {name} <br/>
                Email : {email} <br/>
                Owner : {owner} <br/>
            
            </h2>
            <button onClick={stateHandler}>Update State</button>
        </>
    )
}
export default UsestateDemo;