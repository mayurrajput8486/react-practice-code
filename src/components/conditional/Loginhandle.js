/* import { useState } from "react";

const Loginhandle = () => {

    const [isLoggedin,setIsLoggedin] = useState(true)
    function handlelogin () {
        setIsLoggedin(true)
    }

    function handlelogout () {
        setIsLoggedin(false)
    }
        <h1>Welcome to Loginhandle Comp </h1>
            if(isLoggedin){
                return(
                    <>
                        <h2>Welcome User</h2>
                         <button onClick={handlelogout}>Logout</button>
                    </>
                )
            }else{
                return(
                    <>
                        <h2>Please Login to continue</h2>
                         <button onClick={handlelogin}>LogIn</button>
                    </>
                )
            }
}
export default Loginhandle; */
import { useState } from "react";

const Loginhandle = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, user!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please log in to continue.</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};
export default Loginhandle;