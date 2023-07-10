/* import { memo } from "react";

const Childusecallback = () =>{
    console.log("Child Comp")
    return(
        <>
            <h1>I am child comp</h1>
        </>
    )
}
export default Childusecallback; */

import { memo } from "react";

const Childusecallback = () =>{
    console.log("Child Comp")
    return(
        <>
            <h1>I am child comp</h1>
        </>
    )
}
export default memo(Childusecallback);