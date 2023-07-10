/* import { useCallback, useState } from "react";
import Childusecallback from "./Childusecallback";
const Usecallback = () => {

    const [add,setAdd] = useState(0);

    const learn = () =>{

    }
    return(
        <>
           
            <h1>I am Usecallback Comp</h1>

            <Childusecallback learning={learn}/>

            <h2>Count : {add}</h2>
            <button onClick={()=>setAdd(add +1)}>Add</button>
        </>
    )
}
export default Usecallback; */

import { useCallback, useState } from "react";
import Childusecallback from "./Childusecallback";
const Usecallback = () => {

    const [add,setAdd] = useState(0);


    const learn = useCallback(() =>{

    },[])
    return(
        <>
           
            <h1>I am Usecallback Comp</h1>

            <Childusecallback learning={learn}/>

            <h2>Count : {add}</h2>
            <button onClick={()=>setAdd(add +1)}>Add</button>
        </>
    )
}
export default Usecallback;