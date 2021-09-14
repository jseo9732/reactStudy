// 부수효과 함수안에 있는 'fetchAndSetUser'함수를 밖에서도 사용하고 싶다면?

function Profile({ userId }) {
    const [user, setUser] = useState(); 
    useEffect(() => { 
        async function fetchAndSetUser(needDetail) {
            const data = await fetchUser(userid, needDetail);
            setUser(data);
        }
        fetchAndSetUser(false); 
    }, [userId]);

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