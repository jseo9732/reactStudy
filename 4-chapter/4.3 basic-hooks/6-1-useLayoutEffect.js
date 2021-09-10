import React, { useEffect, useState } from 'react';

export default function App() {
  const [width, setWidth] = useState(200);
  useEffect(() => {
    if (width > 500) {
      setWidth(500);
    }
  }, [width]);
  // 500보다 큰 값을 헨더링 했다가 다시 500으로 렌더링하는 과정에서 깜빡거림
  return (
    <div>
      <div style={{ width, height: 100, backgroundColor: 'green' }}>test</div>
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