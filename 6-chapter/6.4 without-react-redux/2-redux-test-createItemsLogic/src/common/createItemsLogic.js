import createReducer from './createReducer';

// 배열의 고유한 이름을 매개변수로 받는다.
export default function createItemsLogic(name) {
  // 입력받은 이름을 이용해서 액션 타입을 만든다
  const ADD = `${name}/ADD`;
  const REMOVE = `${name}/REMOVE`;
  const EDIT = `${name}/EDIT`;

  // 액션 생선자 함수를 만든다.
  const add = item => ({ type: ADD, item });
  const remove = item => ({ type: REMOVE, item });
  const edit = item => ({ type: EDIT, item });

  const reducer = createReducer(
    // 초기 상태값으로 빈 배열을 넣는다.
    { [name]: [] },
    // ADD, EDIT을 처리하는 리듀서 코드의 로직은 이전에 작성했던 코드와 같다.
    {
      [ADD]: (state, action) => state[name].push(action.item),
      [REMOVE]: (state, action) => {
        const index = state[name].findIndex(item => item.id === action.item.id);
        state[name].splice(index, 1);
      },
      [EDIT]: (state, action) => {
        const index = state[name].findIndex(item => item.id === action.item.id);
        if (index >= 0) {
          state[name][index] = action.item;
        }
      },
    },
  );
  
  // 액션 생성자 함수와 리듀서 함수를 내보낸다.
  return { add, remove, edit, reducer };
}
