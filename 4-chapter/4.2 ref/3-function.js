import React, { useCallback, useState } from 'react';

export default function App() {
    const [text, setText] = useState(INITIAL_TEXT); 
    const [showText, setShowText] = useState(true);

    const setInitialText = useCallback(ref => ref && setText(INITIAL_TEXT), []);
    // useCallback 훅의 메모이제이션 기능 덕분에 한번 생성된 이 함수를 계속해서 재사용함.
    // 따라서 함수는 변하지 않는 값이 됨.

    return ( 
        <div> 
            {showText && ( 
                <input
                    type="text" 
                    ref={setInitialText}
                    value={text} 
                    onChange={e => setText(e.target.value)}
                />
            )}
            <button onClick={() => setShowText(!showText)}>보이기/가리기</button> 
        </div>
    );
}

const INITIAL_TEXT = '안녕하세요';