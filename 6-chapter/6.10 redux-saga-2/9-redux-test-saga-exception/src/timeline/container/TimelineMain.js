import React, { useState } from 'react';
import { getNextTimeline } from '../../common/mockData';
import { actions } from '../state';
import TimelineList from '../component/TimelineList.js';
import { useDispatch, useSelector } from 'react-redux';

export default function TimelineMain() {
  const dispatch = useDispatch();
  const timelines = useSelector(state => state.timeline.timelines);
  const isLoading = useSelector(state => state.timeline.isLoading);
  // 리덕스 상태값으로부터 에러 값을 가져온다.
  const error = useSelector(state => state.timeline.error);
  const text = useSelector(state => state.timeline.text);
  function onAdd() {
    const timeline = getNextTimeline();
    dispatch(actions.addTimeline(timeline));
  }
  function onLike(e) {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find(item => item.id === id);
    dispatch(actions.requestLike(timeline));
  }
  // 현재 입력 중인 문자열을 컴포넌트의 상태값에 저장한다.
  const [currentText, setCurrentText] = useState('');
  function onChangeText(e) {
    const text = e.target.value;
    // 문자열을 입력할 때마다 TRY_SET_TEXT 액션을 발생시킨다.
    dispatch(actions.trySetText(text));
    setCurrentText(text);
  }
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {!!isLoading && <p>전송 중...</p>}
      {/* 에러가 발생하면 화면에 출력한다. */}
      {!!error && <p>에러 발생: {error}</p>}
      <input type="text" value={currentText} onChange={onChangeText} />
      // 리덕스에 저장된 text를 입력창 아래쪽에 출력한다.
      {!!text && <p>{text}</p>}
    </div>
  );
}
