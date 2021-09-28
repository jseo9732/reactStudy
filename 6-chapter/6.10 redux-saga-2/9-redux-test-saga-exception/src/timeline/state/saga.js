import { all, call, put, take, fork, debounce } from 'redux-saga/effects';
import { actions, types } from './index';
import { callApiLike } from '../../common/api';

export function* fetchData(action) {
  while (true) {
    const { timeline } = yield take(types.REQUEST_LIKE);
    yield put(actions.setLoading(true));
    yield put(actions.addLike(timeline.id, 1));
    // 새로운 '좋아요' 요청이 들어오면 이전 에러 정보를 초기화한다.
    yield put(actions.setError(''));
    try {
      // callApiLike에서 프로미스 객체를 거부됨 상태로 만드는 경우를 
      // 처리하기 위해 try catch 문을 사용한다.
      yield call(callApiLike);
    } catch (error) {
      // 프로미스 객체가 거부됨 상태가 되면 에러 객체를 저장하는 액션을 발생시킨다.
      yield put(actions.setError(error));
      // 미리 증가시켰던 좋아요 숫자를 감소시키는 액션을 발생시킨다.
      yield put(actions.addLike(timeline.id, -1));
    }
    yield put(actions.setLoading(false));
  }
}

export function* trySetText(action) {
  const { text } = action;
  yield put(actions.setText(text));
}

export default function* watcher() {
  // TRY_SET_TEXT 액션이 발생하고 0.5초 동안 재발생하지 않으면 trySetText 사가 함수를 실행한다.
  yield all([fork(fetchData), debounce(500, types.TRY_SET_TEXT, trySetText)]);
}
