import React, { useState, useEffect } from 'react';

export default function App() {
    const [count, setCount] = useState(0);
    function onClick() {
        ReactDOM.unstable_batchedUpdates(() => {
            setCount(v => v + 1);
            setCount(v => v + 1);
        });
    }
    console.log('render called');
    return (
        <div>
            <h1>{ count }</h1>
            <button onClick={ onClick }>증가</button>
        </div>
    );
}