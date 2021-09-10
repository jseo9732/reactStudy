import React, { useReducer } from 'react';
// useState와 비슷, 여러개의 상태값을 관리할 때 사용, 상태값을 변경할 수 있는 dispatch가 반환

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: 'setName', name: e.currentTarget.value })
        }
      />
      <input
        type="number"
        value={state.age}
        onChange={(e) =>
          dispatch({ type: 'setAge', age: e.currentTarget.value })
        }
      />
    </div>
  );
}
const INITIAL_STATE = { name: 'empty', age: 0 };
const MAX_AGE = 50;

function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name };
    case 'setAge':
      if (action.age > MAX_AGE) {
        return { ...state, age: MAX_AGE };
      } else {
        return { ...state, age: action.age };
      }
    default:
      return state;
  }
}