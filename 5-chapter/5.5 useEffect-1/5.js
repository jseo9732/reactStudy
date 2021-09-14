// 부수효과 함수를 아래처럼 async await로 만들면 문제가 됨
// 부수효과 함수의 반환값은 항상 함수 타입이어야 하기 때문
// async await함수는 Promise 객체를 반환하기 때문에 부수 효과 함수가 될 수 없음
// 부수효과 함수는 함수만 반환할 수 있고 반환된 함수는 호출되기 직전과 컴포넌트가 사라지기 직전에 호출됨.
useEffect(async () => {
    const data = await fetchUser(userId);
    setUser(data);
}, [userId])



// 따라서, async await함수를 사용하고 싶다면 함수를 하나 만들어서 호출해 주는 방식을 사용해야한다.
useEffect(() => {
    async function fetchAndSetUser() {
        const data = await fetchUser(userId);
        setUser(data);
    }
    fetchAndSetUser();
}, [userId])