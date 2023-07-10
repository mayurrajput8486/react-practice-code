import React, { useState } from 'react'

function UseState() {

    const [name,setName] = useState("ReactJS");
        const [email,setEmail] = useState("reactjs@gmail.com");
        const [owner,setOwner] = useState("Facebook i.e. Meta");
        const [version,setVersion] = useState(18);


    function stateHandler () {
        setName("Angular");
        setEmail("angular@gmail.com");
        setOwner("Google");
        setVersion(16)
        
    }
  return (
    <div>
        <h1> I am UseState Component</h1>
        <h2>
            Name : {name} <br/>
            Email : {email} <br/>
            Owner : {owner} <br/>
            Version : {version} <br/>
        </h2>
        <button onClick={stateHandler}>Update</button>
    </div>
  )
}

export default UseState