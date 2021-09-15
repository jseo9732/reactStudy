import React, { useEffect, useState } from 'react';

export default function App() {
    const [flag, setFlag] = useState(true);
    useEffect(() => {
        setTimeout(() => setFlag(prev => !prev), 1000);
    });
    const fruits = flag ? FRUITS_1 : FRUITS_2;
    return (
        <div>
            {fruits.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
        );
}

const FRUITS_1 = ['사과', '바나나']; 
const FRUITS_2 = ['사과', '파인애플', '바나나'];

// FRUITS_1, FRUITS_2을 번갈아 가면서 fruits값을 가지고 렌더링하는 코드
// 순서 정보를 key에 입력하고 있음, 이렇게 되면 바나나 요소를 수정하게 됨
// 이런 경우는 순서정보보다 id값을 넣어주는 것이 좋음