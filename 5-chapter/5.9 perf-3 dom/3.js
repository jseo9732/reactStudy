import React, { useEffect, useState } from 'react';

export default function App() {
    const [flag, setFlag] = useState(true);
    useEffect(() => {
        setTimeout(() => setFlag(prev => !prev), 1000);
    });
    // 나중에 파인애플이 추가 됨
    // 새로운 요소를 추가하거나 삭제하면 해당 요소만 실제 돔에 추가 또는 삭제를 하고 기존 요소는 건들이지 않음

    // 만약 파인애플을 바나나보다 앞에 추가하게 되면 바나나도 영향을 받음
    // 리액트는 중간에 요소를 추가하면 그 뒤에 있는 요고사 변경되지 않았다는 것을 알지 못함
    // 바나나가 변경되지 않았다는 것을 알기 위해서는 모든 값을 비교해야하는데 연산량이 꽤 많게 됨.
    // 리액트는 효율적으로 연산하기 위해 순서정보를 사용한다. 
    //위에서 아래로 변경될 때 두번째가 바나나가 파인애플로 변경되고 바나나를 추가하는 형식으로 반영됨
    if (flag) {
        return (
            <div>
                <p>사과</p>
                <p>바나나</p>
            </div>
        );
    } else {
        return (
            <div>
                <p>사과</p>
                <p>바나나</p>
                <p>파인애플</p>
            </div>
        );
    }
}
