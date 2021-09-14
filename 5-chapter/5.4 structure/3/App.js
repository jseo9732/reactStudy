// 2.js를 리팩토링을 해서 분리
// 재사용성이 높은 컴포넌트는 component에 넣음
// 재사용성이 낮은 컴포넌트는 container에 넣음

import React from 'react'; 
import FriendPage from './container/FriendPage.js';

export default function App() {
    return ( 
        <div>
            <FriendPage />
        </div>
    );
}
