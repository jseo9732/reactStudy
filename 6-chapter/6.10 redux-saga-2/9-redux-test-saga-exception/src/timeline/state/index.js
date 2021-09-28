import createReducer from '../../common/createReducer';
import createItemsLogic from '../../common/createItemsLogic';
import mergeReducers from '../../common/mergeReducers';

const { add, remove, edit, reducer: timelinesReducer } = createItemsLogic(
  'timelines',
);

export const types = {
  INCREASE_NEXT_PAGE: 'timeline/INCREASE_NEXT_PAGE',
  REQUEST_LIKE: 'timeline/REQUEST_LIKE',
  ADD_LIKE: 'timeline/ADD_LIKE',
  SET_LOADING: 'timeline/SET_LOADING',
  // 에러 정보를 저장하는 SET_ERROR 액션 타입을 추가한다.
  SET_ERROR: 'timeline/SET_ERROR',
  // 리덕스의 text 상태값을 변경하는 액션 타입을 추가한다.
  SET_TEXT: 'timeline/SET_TEXT',
  // 리덕스의 text 상태값 변경을 시도하는 액션 타입이다.
  TRY_SET_TEXT: 'timeline/TRY_SET_TEXT',
};

export const actions = {
  addTimeline: add,
  removeTimeline: remove,
  editTimeline: edit,
  increaseNextPage: () => ({ type: types.INCREASE_NEXT_PAGE }),
  requestLike: timeline => ({ type: types.REQUEST_LIKE, timeline }),
  addLike: (timelineId, value) => ({ type: types.ADD_LIKE, timelineId, value }),
  setLoading: isLoading => ({
    type: types.SET_LOADING,
    isLoading,
  }),
  setError: error => ({
    type: types.SET_ERROR,
    error,
  }),
  setText: text => ({
    type: types.SET_TEXT,
    text,
  }),
  trySetText: text => ({
    type: types.TRY_SET_TEXT,
    text,
  }),
};

// error 상태값의 초깃값은 빈 문자열이다.
// text 상태값의 초기값으로 빈 문자열을 넣는다.
const INITIAL_STATE = { nextPage: 0, isLoading: false, error: '', text: '' };
const reducer = createReducer(INITIAL_STATE, {
  [types.INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
  [types.ADD_LIKE]: (state, action) => {
    const timeline = state.timelines.find(
      item => item.id === action.timelineId,
    );
    if (timeline) {
      timeline.likes += action.value;
    }
  },
  [types.SET_LOADING]: (state, action) => (state.isLoading = action.isLoading),
  [types.SET_ERROR]: (state, action) => (state.error = action.error),
  [types.SET_TEXT]: (state, action) => (state.text = action.text),
});
const reducers = [reducer, timelinesReducer];
export default mergeReducers(reducers);
