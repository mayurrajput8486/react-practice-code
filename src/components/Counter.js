import React, { useReducer } from 'react'

const initialState = 5;
const Counter = () => {

    const reducer = (state,action) =>{
        switch(action.type){
            case 'Increment' :
                return state + 1;
            
            case 'Decrement' :
                return state - 1;
            
            case 'Reset':
                return 0;

            default :
                return state;
        }
    }
    const [count,dispatch] = useReducer(reducer,initialState)

    function increment () {
        dispatch({type : 'Increment'})
    }

    function decrement () {
        dispatch({type : 'Decrement'})
    }

    function reset () {
        dispatch({type : 'Reset'})
    }
  return (
    <div>
        <hr/>
        <h1>I am Counter Comp</h1>
        <h2>Count : {count}</h2>
        <button onClick={increment}>Incremant</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter;