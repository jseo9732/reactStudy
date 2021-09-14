//만약 위 코드에서 userId가 변경되지 않는다는 것을 확신한다면 
// 의존성 배열에 빈배열을 입력한 useEffect로 표현하는 것보다 아래아래 처럼 별도의 훅을 만드는 게 좋음

function Profile({ userId }) {
    const [user, setUser] = useState();
    // const [needDetail, setNeedDetail] = useState();
    useOnMounted(() => fetchUser(userId).then(data => setUser(data)));
    // useEffect(() => {
    //     fetchUser(userId, needDetail).then(data => setUser(data));
    // }, []);
    // ...
}

// useOnMounted훅
import { useEffect } from 'react';

export default function useOnMounted(effect) {
    useEffect(effect, []);
}
