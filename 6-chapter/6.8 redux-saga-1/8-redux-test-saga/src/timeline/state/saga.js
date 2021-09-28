import { all, call, put, take, fork } from 'redux-saga/effects';
import { actions, types } from './index';
import { callApiLike } from '../../common/api';

export function* fetchData(action) {
  while (true) {
    const { timeline } = yield take(types.REQUEST_LIKE);
    yield put(actions.setLoading(true));
    yield put(actions.addLike(timeline.id, 1));
    yield call(callApiLike);
    yield put(actions.setLoading(false));
  }
}

// 강의 코드
// takeLeading effect가 좋아요 버튼을 여러번 클릭했을 때 
// 아직 처리되고 있는 액션이 있을 때 그 사이에 들어온 액션은 무시하도록 해줌
export default function* () {
  yield all([takeLeading(types.REQUEST_LIKE, fetchData)]);
}

// 교재 코드
// export default function* watcher() {
//   yield all([fork(fetchData)]);
// }
