import React, { useReducer } from 'react';
import CountReducer from './CountReducer';

export default function Count() {
  const [state, dispatch] = useReducer(CountReducer, initialCount);
  
  function handleClick(event) {
    if (event.target.id === 'increment') {
      dispatch({
        type: 'increment_count'
      })
    } else if (event.target.id === 'decrement') {
      dispatch({
        type: 'decrement_count'
      })
    }
  }
  
  return (
    <>
    <h2>{state.count}</h2>
    <div>
      <button id='increment' onClick={handleClick}>+1</button>
      <button id='decrement' onClick={handleClick}>-1</button>
    </div>
    </>
  );
};

const initialCount = { count: 0 };