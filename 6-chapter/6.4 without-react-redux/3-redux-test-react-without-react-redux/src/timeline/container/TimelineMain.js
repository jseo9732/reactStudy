import React, { useEffect, useReducer } from 'react';
// 이전에 작성한 파일로부터 스토어 객체를 가져온다.
import store from '../../common/store';
// getNextTimeline 함수를 이용하면 필요할 때마다 타임라인 데이터를 가져올 수 있다.
// getNextTimeline 함수는 서버를 흉내 내기 위해 만들었다.
import { getNextTimeline } from '../../common/mockData';
// 타임라인 데이터를 추가하기 위한 액션 생성자 함수를 가져온다.
import { addTimeline } from '../state';
import TimelineList from '../component/TimelineList.js';

// 리팩터링 후
export default function TimelineMain() {
  const [, forceUpdate] = useReducer(v => v + 1, 0);
  useEffect(() => {
    let prevTimelines = store.getState().timeline.timelines;
    const unsubscribe = store.subscribe(() => {
      const timelines = store.getState().timeline.timelines;
      if (prevTimelines !== timelines) {
        forceUpdate();
      }
      prevTimelines = timelines;
    });
    return () => unsubscribe();
  }, []);
  function onAdd() {
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline));
  }
  console.log('TimelineMain render');
  const timelines = store.getState().timeline.timelines;
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} />
    </div>
  );
}

// 리팩터링 전
// export default function TimelineMain() {
//   const [, forceUpdate] = useReducer(v => v + 1, 0);
//   useEffect(() => {
// 		// 액션이 처리될 때마다 화면을 다시 그리기 위해 subscribe 메서드를 사용한다.
// 		// 리덕스 상태가 변경되면 무조건 컴포넌트를 렌더링하기 위해 forceUpdate 함수를 사용한다.
//     const unsubscribe = store.subscribe(() => forceUpdate());
// 		// 컴포넌트가 언마운트될 때 subscribe 메서드에 등록한 이벤트 처리함수를 해제한다.
//     return () => unsubscribe();
//   }, []);
//   function onAdd() {
//     const timeline = getNextTimeline();
// 		// 타임라인 추가 버튼을 누르면 타임라인을 추가하는 액션을 발생시킨다.
//     store.dispatch(addTimeline(timeline));
//   }
//   console.log('TimelineMain render');
// 	// 스토어에서 타임라인 배열을 가져온다.
//   const timelines = store.getState().timeline.timelines;
//   return (
//     <div>
//       <button onClick={onAdd}>타임라인 추가</button>
//       <TimelineList timelines={timelines} />
//     </div>
//   );
// }