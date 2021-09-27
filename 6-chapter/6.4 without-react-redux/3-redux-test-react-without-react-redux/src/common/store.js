import { createStore, combineReducers } from 'redux';
import timelineReducer from '../timeline/state';
import friendReducer from '../friend/state';

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
//store 객체를 내보낸다.
export default store;
