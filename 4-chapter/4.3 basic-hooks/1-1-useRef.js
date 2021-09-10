import React, { useState, useRef, useEffect } from 'react';

export default function App() {
    const timerIdRef = useRef(-1);
    //ref 객체는 꼭 돔 요소를 참조할 때만 사용할 수 있는 건 아니다. 렌더링과 상관없는 값을 저장할때 유용하게 사용됨
    useEffect(()=> {
        timerIdRef.current = setTimeout(() => {}, 1000); 
    });
    // ...
    useEffect(() => { 
        if (timerIdRef.current >= 0) {
            clearTimeout(timerIdRef.current);
        }
    });
    // ...
}
