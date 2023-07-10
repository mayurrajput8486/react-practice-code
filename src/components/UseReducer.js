
import React, { useReducer } from 'react';

const UseReducer = () => {
  const initialState = {
    name: 'ReactJS',
    email: 'reactjs@gmail.com',
    owner: 'Facebook i.e. Meta',
    version: 18,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE':
        return {
          ...state,
          name: 'Angular',
          email: 'angular@gmail.com',
          owner: 'Google',
          version: 18,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>I am UseReducer Component</h1>
      <h2>
        <div>
          Name: {state.name} <br />
          Email: {state.email} <br />
          Owner: {state.owner} <br />
          Version: {state.version}
        </div>
      </h2>
      <button onClick={() => dispatch({ type: 'CHANGE' })}>Update</button>
    </div>
  );
};

export default UseReducer;
