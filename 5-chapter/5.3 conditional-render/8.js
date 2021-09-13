// Child 자식 컴포넌트는 user 데이터가 없을 때는 null을 반환하고 있음
// 이렇게 아무것도 렌더링 하지 않을 때 null을 반환하는 코드를 자주 작성하게 됨

function Parent({ user }) { 
    return (
        <div>
            <p>Parent</p>
            <Child user={user} /> 
        </div>
    );
}
    
function Child({ user }) { 
    const [v, setV] = useState(0);
    if (user) {
        return null;
    }
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.phone}</p> 
        </div>
    );
}

// 위에 코드를 아래 코드로 작성
// 부모쪽에서 먼저 검사해서 자식 컴포넌트의 코드를 간단하게 만들어 줌
// 이 때, user 데이터의 상태에 따라서 자식 컴포넌트가 언마운트, 마운트를 반복할 수도 있음
// 그것이 의도한 것이 아니라면 상태값이 초기화되어 문제가 될 수 있음

function Parent({ user }) { 
    return (
        <div>
            <p>Parent</p>
            {user && <Child user={user} />}
        </div>
    );
}
    
function Child({ user }) { 
    const [v, setV] = useState(0);
    // if (user) {
    //     return null;
    // }
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.phone}</p> 
        </div>
    );
}
    