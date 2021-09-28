import createReducer from '../../common/createReducer';
import createItemsLogic from '../../common/createItemsLogic';
import mergeReducers from '../../common/mergeReducers';

const { add, remove, edit, reducer: timelinesReducer } = createItemsLogic(
  'timelines',
);

// 1. 리덕스 사가에서 사용할 목적으로 모든 액션 타입을 하나의 객체에 담아서 내보낸다.
export const types = {
  INCREASE_NEXT_PAGE: 'timeline/INCREASE_NEXT_PAGE',
  // 3. 좋아요 버튼을 클릭하면 발생하는 액션 타입
  REQUEST_LIKE: 'timeline/REQUEST_LIKE',
  // 4. 좋아요 숫자를 변경할 때 사용할 액션 타입
  ADD_LIKE: 'timeline/ADD_LIKE',
  // 5. 로딩 여부를 알려줄 액션 타입
  SET_LOADING: 'timeline/SET_LOADING',
};

// 2. 액션 생성자 함수도 하나의 객체에 담아서 내보낸다.
export const actions = {
  addTimeline: add,
  removeTimeline: remove,
  editTimeline: edit,
  // 6. 액션 생성자 함수를 추가한다.
  increaseNextPage: () => ({ type: types.INCREASE_NEXT_PAGE }),
  requestLike: timeline => ({ type: types.REQUEST_LIKE, timeline }),
  addLike: (timelineId, value) => ({ type: types.ADD_LIKE, timelineId, value }),
  setLoading: isLoading => ({
    type: types.SET_LOADING,
    isLoading,
  }),
};

// 7. 로딩 상태값을 추가한다.
const INITIAL_STATE = { nextPage: 0, isLoading: false };
const reducer = createReducer(INITIAL_STATE, {
  [types.INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
  // 8. 리듀서 코드를 추가한다.
  [types.ADD_LIKE]: (state, action) => {
    const timeline = state.timelines.find(
      item => item.id === action.timelineId,
    );
    if (timeline) {
      timeline.likes += action.value;
    }
  },
  [types.SET_LOADING]: (state, action) => (state.isLoading = action.isLoading),
});
const reducers = [reducer, timelinesReducer];
export default mergeReducers(reducers);
