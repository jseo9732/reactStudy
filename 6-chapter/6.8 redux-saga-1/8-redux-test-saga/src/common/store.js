import { createStore, combineReducers, applyMiddleware } from 'redux';
import timelineReducer from '../timeline/state';
import friendReducer from '../friend/state';
import createSagaMiddleware from 'redux-saga';
import timelineSaga from '../timeline/state/saga';
import { enableAllPlugins } from 'immer';

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

// 사가 미들웨어 함수를 만들고
const sagaMiddleware = createSagaMiddleware();
// 스토어를 생성할 때 입력한다. 
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// 사가 미들웨어에 코드 6- 69(timeline/state/saga.js)에서 작성한 함수를 입력한다.
function* rootSaga() {
  yield enableAllPlugins([timelineSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;