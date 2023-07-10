import { useMemo, useState } from "react"

const Usememo = () => {

    const [add,setAdd] = useState(0)
    const [minus,setMinus] = useState(100)

    /* function multiply () {
        console.log("hello.....")
        return add *10
    } */

    const multiplication = useMemo(
        function multiply () {
            console.log("hello.....")
            return add *10
        },[add])

    return(
        <>
            <h1>I am Usememo Comp</h1>
            
            <h2>Add : {add} & Multiply : {multiplication}</h2>
            <button onClick={()=>setAdd(add +1)}>Add</button>

            <h2>Sub : {minus}</h2>
            <button onClick={()=>setMinus(minus - 1)}>Subtract</button>
        </>
    )
}
export default Usememo;