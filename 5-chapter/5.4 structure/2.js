// 너무 많은 기능이 모여있어 재사용하기 좋지 않음 => 컴포넌트를 분리하는 기준이 필요함
// 비즈니스 로직과 상태값 유무로 컴포넌트 분리 추천
// 재사용성이 좋은 컴포넌트의 정의
//  1. 비즈니스 로직이 없다.
//  2. 상태값이 없다. 단, 마우스 오버(mouse over)와 같은 UI 효과를 위한 상태값은 제외.

import React, { useState } from 'react'; 
import { getNextFriend } from './data';

export default function App() {
    const [friends, setFriends] = useState([]); 
    const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);

    const friendsWithAgeLimit = friends.filter(item => item.age <= ageLimit); 
    function onAdd() {
        const friend = getNextFriend(); 
        setFriends([...friends, friend]);
    }
    function onChangeOption(e) {
        const value = Number(e.currentTarget.value);
        setAgeLimit(value);
    }

    return ( 
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <div> 
                <select onChange={onChangeOption} value={ageLimit}>
                    {AGE_LIMIT_OPTIONS.map(option => (
                        <option key={option} value={option}>
                            {option} 
                        </option>
                    ))} 
                </select>
                세 이하만 보기 
            </div> 
            <ul> 
                {friendsWithAgeLimit.map(friend => (
                    <li key={friend.id}>{`${friend.name} (${friend.age})`}</li>
                ))}
            </ul>
        </div>
    );
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];