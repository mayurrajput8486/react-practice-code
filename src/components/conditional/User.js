/* import { useState } from "react";
const User = () => {

    const [loggedIn,setLoggedIn] = useState(false);
    if(loggedIn){
    return(
        <>
            <h1>I am User Comp</h1>
            <h2>Hello....I am true</h2>

        </>
    )
    }
    else{
        return(
            <>
                <h1>Hello....I am false</h1>
            </>
        )
    }
}
export default User; */

import { useState } from "react";
const User = () => {

    const [loggedIn,setLoggedIn] = useState(true);
 
    return(
        <>
            <h1>I am User Comp</h1>
            <div>   
                {loggedIn ? <h2>Hello....I am true</h2>:
                <h2>Hello....I am false</h2>}
            </div>
           

        </>
    )

}
export default User;
