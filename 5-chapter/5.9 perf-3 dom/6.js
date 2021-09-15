import React from 'react';

export default function App({ user }) {
    // ...
    return (
        <div>
            <p>사용자 상제 정보</p>
            <UserDetail user={user} />
        </div>
        );
}

function UserDetail({ user }) {
    // ...
}

// 위 코드에서 자식 컴포넌트'UserDetail'가 관리하는 상태값이 있다고 할 때
// 그 상태값들은 사실 해당 유저에 대한 상태값일 것이다.
// 따라서 유저 데이터가 변경됐을 때 (사용자 자체가 변경 됐을 때) 'UserDetail'안에서 유지하던 상태값을 초기화하고 싶을 수 있음
// 그럴 때는 아래 코드처럼 컴포넌트의 key로 유저의 아이디를 입력하면 컴포넌트는 유저가 변경됐을 때, 상태값이 모두 초기화 됨
<UserDetail key={user.id} user={user} />