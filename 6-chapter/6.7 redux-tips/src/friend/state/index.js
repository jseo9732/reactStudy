import { createReducer, createSetValueAction, setValueReducer } from '../../common/redux-helper';
import createItemsLogic from '../../common/createItemsLogic';
import mergeReducers from '../../common/mergeReducers';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';

const { add, remove, edit, reducer: friendsReducer } = createItemsLogic(
  'friends',
);

// 5. 지워준다.
// const SET_AGE_LIMIT = 'friend/SET_AGE_LIMIT';
// const SET_SHOW_LIMIT = 'friend/SET_SHOW_LIMIT';
// 1. 타입을 정의한다.
const SET_VALUE = 'friend/SET_VALUE';

export const addFriend = add;
export const removeFriend = remove;
export const editFriend = edit;
// 4. AGE_LIMIT, SHOW_LIMIT 코드는 지워준다.
// export const setAgeLimit = ageLimit => ({ type: SET_AGE_LIMIT, ageLimit });
// export const setShowLimit = showLimit => ({ type: SET_SHOW_LIMIT, showLimit });
// 2. 액션 생성자 함수를 만들어 준다.
export const setValue = createSetValueAction(SET_VALUE);

const INITIAL_STATE = { 
  ageLimit: MAX_AGE_LIMIT,
  showLimit: MAX_SHOW_LIMIT,
  // 추가 예시
  name: 'mike',
};
const reducer = createReducer(INITIAL_STATE, {
  // 6. 지워준다.
  // [SET_AGE_LIMIT]: (state, action) => (state.ageLimit = action.ageLimit),
  // [SET_SHOW_LIMIT]: (state, action) => (state.showLimit = action.showLimit),
  // 3. 리듀서를 추가한다.
  [SET_VALUE]: setValueReducer,
});
const reducers = [reducer, friendsReducer];
export default mergeReducers(reducers);
