import React from 'react';
import { getNextTimeline } from '../../common/mockData';
import { actions } from '../state';
import TimelineList from '../component/TimelineList.js';
import { useDispatch, useSelector } from 'react-redux';

export default function TimelineMain() {
  const dispatch = useDispatch();
  const timelines = useSelector(state => state.timeline.timelines);
  // 리덕스 상태값에서 로딩 정보를 가져온다.
  const isLoading = useSelector(state => state.timeline.isLoading);
  function onAdd() {
    const timeline = getNextTimeline();
    dispatch(actions.addTimeline(timeline));
  }
  // 좋아요 버튼에 반응하는 이벤트 처리함수이다.
  function onLike(e) {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find(item => item.id === id);
    // REQUEST_LIKE 액션을 발생시킨다.
    dispatch(actions.requestLike(timeline));
  }
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {/* 로딩 중일 때 화면에 텍스트 정보를 출력한다. */}
      {!!isLoading && <p>전송 중...</p>}
    </div>
  );
}
