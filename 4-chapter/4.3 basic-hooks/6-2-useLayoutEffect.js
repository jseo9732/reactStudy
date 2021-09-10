import React, { useLayoutEffect, useRef, useState } from 'react';
// useEffect 훅과 비슷하게 동작하지만 부수효과 함수를 동기로 호출한다는 차이가 있음
// 즉, useLayoutEffect의 부수효과 함수는 렌더링 결과가 돔에 반영된 직후에 바로 호출
// 그래서서, 부수효과 함수에서 연산을 많이 하면 브라우저가 먹통이 될 수도 있음
//언제 사용하냐? 렌더링 작후에 돔 요소의 값을 읽어들이는 경우, 조건에 따라서 컴포넌트를 다시 렌더링 하고 싶은 경우

export default function App() {
  const [width, setWidth] = useState(200);
  const boxRef = useRef();
  useLayoutEffect(() => {
    console.log(boxRef.current.getBoundingClientRect().width);
    if (width > 500) {
      setWidth(500);
    }
    //연산이 많은 코드
    // let v = 0;
    // for (let i = 0; i < 1000000000; i++) {
    //   v += i * 2 + i;
    // }
    // console.log(v);
  }, [width]);
  return (
    <div>
      <div
        ref={boxRef}
        style={{ width, height: 100, backgroundColor: 'green' }}
      >
        test
      </div>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 499 + 1);
          setWidth(value);
        }}
      >
        500 이하
      </button>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 500 + 501);
          setWidth(value);
        }}
      >
        500 이상
      </button>
    </div>
  );
}