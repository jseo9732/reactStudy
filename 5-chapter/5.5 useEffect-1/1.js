// 아래 코드에서 useEffect의 부수 효과 함수는 Profile 컴포넌트가 렌더링될 때마다 
// 노출되기 때문에 서버의 api를 호출하는 코드가 항상 실행 됨 => 성능에 부담됨
function Profile({ userId }) {
    const [user, setUser] = useState(); 
    useEffect(() => {
        fetchUser(userId).then(data => setUser(data));
    });
    // ...
}


// 위의 문제를 해결하기 위해 의존성 배열에 빈배열을 입력하면 되지만
// userId가 변경되어도 새로운 사용자 정보를 가져오지 못하기 때문에 올바른 해결책은 아님
function Profile({ userId }) {
    const [user, setUser] = useState(); 
    useEffect(() => {
        fetchUser(userId).then(data => setUser(data));
    }, []);
    // ...
}


// 이렇게 userId를 입력하는 것이 정확한 방법임
function Profile({ userId }) {
    const [user, setUser] = useState(); 
    useEffect(() => {
        fetchUser(userId).then(data => setUser(data));
    }, [userId]);
    // ...
}