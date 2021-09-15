import React, { useEffect, useState } from 'react';

export default function App() {
    const [flag, setFlag] = useState(true);
    useEffect(() => {
        setTimeout(() => setFlag(prev => !prev), 1000);
    });

    // 아래 코드처럼 key를 이용하면 바나나를 건들이지 않고 파인애플만 추가할 수 있음
    // key를 입력하면 리액트는 같은 요소끼리만 비교를 한다. 따라서 리액트는 바나나 요소가 변경되지 않았다는 것을 알게 됨
    if (flag) {
        return (
            <div>
                <p key="apple">사과</p>
                <p key="banana">바나나</p>
            </div>
        );
    } else {
        return (
            <div>
                <p key="apple">사과</p>
                <p key="banana">바나나</p>
                <p key="pineapple">파인애플 </ p>
            </div>
        );
    }
}

// 대부분의 데이터는 id값이 있는데 그 값을 key 속성값에 입력하는게 좋다.
// 만약 key 속성값에 입력할 값이 없다면 차선책으로 배열 내에서의 순서 정보를 입력해야한다.
// 하지만 배열 중간에 원소를 추가하거나 삭제, 순서의 변경이 있는 경우 비효율적으로 렌더링 하게 됨
// 따라서 key 속성값에 순서 정보를 입력하는 것은 배열의 끝에서만 원소를 추가하거나 삭제하면서 원소의 순서를 변경하지 않는 경우에만 적합!