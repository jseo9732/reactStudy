// 2.js를 리팩토링을 해서 분리
// 재사용성이 높은 컴포넌트는 component에 넣음
// 재사용성이 낮은 컴포넌트는 container에 넣음

import React, { useState } from 'react'; 
import FriendList from '../component/FriendList.js';
import NumberSelect from '../component/NumberSelect.js';
import { getNextFriend } from '../data';

export default function FriendPage() {
    const [friends, setFriends] = useState([]); 
    const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);

    const friendsWithAgeLimit = friends.filter(item => item.age <= ageLimit); 
    function onAdd() {
        const friend = getNextFriend(); 
        setFriends([...friends, friend]);
    }

    return ( 
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <NumberSelect 
                value={ageLimit} 
                options={AGE_LIMIT_OPTIONS} 
                label="세 이하만 보기" 
                onChange={setAgeLimit} 
            />
            <FriendList friends={friendsWithAgeLimit} />
        </div>
    );
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];