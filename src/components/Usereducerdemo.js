import { useReducer } from "react";

const initialState = {
    name : "React",
    email : "react@gmail.com",
    owner : "Google"
}

const reducer = (state,action) => {
    switch(action.type){
        case 'update' :
            return {
                ...state,
                name : "Angular" ,
                email : "angular@gmail.com",
                owner : "Google"

            };
        default :
        return state;
    }
}
const Usereducerdemo= () => {

    const [state,dispatch] = useReducer(reducer, initialState)

    return(
        <>
            <hr/>
            <h1>I am a Usereducerdemo</h1>
            <h2>
                Name : {state.name} <br/>
                Email : {state.email} <br/>
                Owner : {state.owner}
            </h2>
            <button onClick={()=>dispatch({type : 'update'})}>Update State</button>
        </>
    )
}
export default Usereducerdemo;