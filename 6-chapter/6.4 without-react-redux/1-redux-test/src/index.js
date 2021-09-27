import { createStore, combineReducers } from 'redux';
// 친구 목록과 타임라인 모듈에서 액션 생성자 함수와 리듀서 함수를 가져온다.
import timelineReducer, {
    addTimeline,
    removeTimeline,
    editTimeline,
    increaseNextPage,
} from './timeline/state';
import friendReducer, {
    addFriend,
    removeFriend,
    editFriend,
} from './friend/state';

// combineReducers 함수를 이용해서 두 개의 리듀서를 하나로 합쳤다.
const reducer = combineReducers({
    timeline: timelineReducer,
    friend: friendReducer,
});
// 스토어를 생성
const store = createStore(reducer);
// 디버깅을 위해 액션 처리가 끝날 때마다 상태값을 로그로 출력한다.
store.subscribe(() => {
    const state = store.getState();
    console.log(state);
});

// 타임라인을 테스트 하기 위해 다섯 개의 액션을 생성
store.dispatch(addTimeline({ id: 1, desc: '코딩은 즐거워' })); 
store.dispatch(addTimeline({ id: 2, desc: '리덕스 좋아' })); 
store.dispatch(increaseNextPage()); 
store.dispatch(editTimeline({ id: 2, desc: '리덕스 너무 좋아' })); 
store.dispatch(removeTimeline({ id: 1, desc: '코딩은 즐거워' }));

// 친구 목록을 테스트 하기 위해 네 개의 액션을 생성
store.dispatch(addFriend({ id: 1, name: '아이유' })); 
store.dispatch(addFriend({ id: 2, name: '손나은' }));
store.dispatch(editFriend({ id: 2, name: '수지' }));
store.dispatch(removeFriend({ id: 1, name: '아이유 ' }));