import { useState } from "react";

const UserLogged = () => {

    const [loggedIn,setloggedIn]= useState(false)
    return(
        <>
            <h1>Welcome to App....!!!</h1>
            <button onClick={()=>setloggedIn(!loggedIn)}>
                {loggedIn ? "LogOut " : "LogIn"}    
            </button> 
            {loggedIn ? (
                <h2>Hello, React</h2>
            ) : (
                <div>
                    <h2>Please Log in </h2>
                </div>
            )}
        </>
    )
}
export default UserLogged;