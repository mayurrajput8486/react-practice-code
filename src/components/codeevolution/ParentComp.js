/* 
import { useState } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";
const ParentComp = () => {

    const [age,setAge] = useState(23);
    const [salary,setSalary] = useState(40000)

    function incrementAge () {
        setAge(age + 1)
    }

    function incrementSalary () {
      setSalary(salary + 5000)
    }
    return(
        <>
            <h1>I am Parent Comp</h1>
            <Title/>
            <h1><Count text="Age" count = {age}/></h1>
            <Button handleClick={incrementAge}>Increment Age</Button>

            <h1><Count text="Salary" count = {salary}/></h1>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </>
    )
}
export default ParentComp;
 */
import { useState,useCallback } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";
const ParentComp = () => {

    const [age,setAge] = useState(23);
    const [salary,setSalary] = useState(40000)

    const incrementAge  = useCallback(() =>{
        setAge(age + 1)
    },[age])

    const incrementSalary = useCallback(() => {
      setSalary(salary + 5000)
    },[salary])
    return(
        <>
            <h1>I am Parent Comp</h1>
            <Title/>
            <h1><Count text="Age" count = {age}/></h1>
            <Button handleClick={incrementAge}>Increment Age</Button>

            <h1><Count text="Salary" count = {salary}/></h1>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </>
    )
}
export default ParentComp;