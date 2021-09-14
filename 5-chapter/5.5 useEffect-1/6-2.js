// 1. 'fetchAndSetUser'함수가 밖에 꺼내져 있어야 함
// 2. 의존성 배열에는 함수를 입력
// 여기서 문제는 'fetchAndSetUser'함수가 'Profile'컴포넌트가 렌더링될 때마다 생성된다는 점이다.
// 따라서, 의존성 배열의 내용이 항상 변하고 부수 효과 함수도 렌더링될 때마다 실행이 된다.
// 3. 이럴 때는 useCallback훅을 사용 => userId가 변경될 때만 'fetchAndSetUser'함수가 새로 생성되도록 함
function Profile({ userId }) {
    const [user, setUser] = useState();
    const fetchAndSetUser = useCallback(
        async function(needDetail) {
            const data = await fetchUser(userId, needDetail); 
            setUser(data);
        },
        [userId],
    );
    useEffect(()=> {
        fetchAndSetUser(false); 
    }, [fetchAndSetUser]);

    if (!user) {
        return <h1>로딩...</h1>;
    }
    return( 
        <div>
            <h1>{user.name}</h1>
            <p>{`캐시: ${user.cash}`}</p> 
            <p>{`계정 생성일: ${user.createdAt}`}</p> 
            <button onClick={() => fetchAndSetUser(true)}>더보기</button>
            <UserDetail user={user} /> 
        </div>
    );
}