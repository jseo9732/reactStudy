// useEffect 안에 사용한 needDetail이 상태값이기 때문에 의존성 배열에 추가를 해줘야하는데
// 의존성 배열에 입력하는 것을 놓칠 때가 있음
// => 리액트 팀에서 이를 방지하기 위해 eslint에서 사용할 수 있는 룰을 만들어서 제공함 (create-react-app에 자동 내장)

function Profile({ userId }) {
    const [user, setUser] = useState();
    const [needDetail, setNeedDetail] = useState();
    useEffect(() => {
        fetchUser(userId, needDetail).then(data => setUser(data));
    }, [userId]);
    // ...
}