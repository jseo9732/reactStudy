import React, { useReducer } from 'react';
// useReducer 훅과 Context api를 같이 이용하면 
// 이와 같이 상위 컴포넌트에서 트리의 깊은 곳으로 이벤트 처리 함수를 쉽게 전달할 수 있다.

export const ProfileDispatch = React.createContext(null);

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <ProfileDispatch.Provider value={dispatch}>
        <SomeComponent />
      </ProfileDispatch.Provider>
    </div>
  );
}
const INITIAL_STATE = { name: 'empty', age: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name };
    case 'setAge':
      return { ...state, age: action.age };
    default:
      return state;
  }
}