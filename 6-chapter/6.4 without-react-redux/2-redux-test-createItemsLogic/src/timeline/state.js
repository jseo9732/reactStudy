import createReducer from '../common/createReducer';
import createItemsLogic from '../common/createItemsLogic';
// 공통 로직을 사용하기 위해 mergeReducers 함수를 사용했다.
import mergeReducers from '../common/mergeReducers';

// timelines 이름으로 공통 로직을 생성
const { add, remove, edit, reducer: timelinesReducer } = createItemsLogic('timelines');

// 공통 로직에 포함되지 않은 액션 타입, 액션 생성자 함수, 리듀서 코드를 정의한다.
const INCREASE_NEXT_PAGE = 'timeline/INCREASE_NEXT_PAGE';

export const addTimeline = add;
export const removeTimeline = remove;
export const editTimeline = edit;
export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

const INITIAL_STATE = { nextPage: 0 };
const reducer = createReducer(INITIAL_STATE, {
  [INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
});
// mergeReducers 함수를 사용해서 공통 로직의 리듀서 함수와 직접 작성한 리듀서 함수를 합친다.
const reducers = [reducer, timelinesReducer];
export default mergeReducers(reducers);
