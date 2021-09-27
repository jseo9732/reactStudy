import produce from 'immer';

export function createReducer(initialState, handlerMap) {
  return function(state = initialState, action) {
    return produce(state, draft => {
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}

// setValue 액션을 생성할 때는 아래 함수를 사용
export function createSetValueAction(type) {
  return (key, value) => ({ type, key, value });
}
// 리듀서 코드는 아래 코드로 사용
export function setValueReducer(state, action){
  state[action.key] = action.value;
}