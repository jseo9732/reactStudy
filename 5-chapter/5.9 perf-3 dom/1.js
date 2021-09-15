import React, { useEffect, useState } from 'react';

export default function App() {
    // flag를 1초마다 변경하고 있음
    const [flag, setFlag] = useState(true); 
    useEffect(() => {
        setTimeout(() => setFlag(prev => !prev), 1000);
    });

    // 아래 if문에서는 칠드런 부분은 같고 부모 태그가 <div>, <span>로 다름
    // 이렇게 요소의 타입을 변경하면 해당 요소의 모든 자식 요소도 같이 변경 됨
    // 자식 요소가 많은 요소의 타입을 변경하면 화면이 끊기는 느낌이 들 수 있음 
    if (flag) {
        return (
            <div>
                <Counter />
                <p>사과</p>
                <p>바나나</p>
            </div>
        );
    } else {
        return(
            <span>
                <Counter />
                <p>사과</p>
                <p>바나나</p>
            </span>
        );
    }
}

function Counter() {
    // 0.1초마다 count값이 변경되고 있음
    const [count, setCount] = useState(0);
    useEffect(() => {
        const id = setTimeout(() => setCount(prev => prev + 1), 100);
        return () => clearTimeout(id);
    });
    return <p>count: {count}</p>;
}