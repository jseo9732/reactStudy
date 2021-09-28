import React from 'react';

// 좋아요 버튼에 반응하는 이벤트 처리 함수를 속성값으로 받는다.
function TimelineList({ timelines, onLike }) {
  return (
    <ul>
      {timelines.map(({ id, desc, likes }) => (
        <li key={id}>
          {desc}
          {/* 좋아요 버튼을 추가한다.
          이벤트 처리 함수에 타임라인 객체의 id 정보를 넘기기 위해 데이터 세트(dataset)를 이용한다. */}
          <button data-id={id} onClick={onLike}>{`좋아요(${likes})`}</button>
        </li>
      ))}
    </ul>
  );
}
export default TimelineList;
