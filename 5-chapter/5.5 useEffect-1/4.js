// 의존성 배열에 필요한 변수를 입력하지 않았을 때 발생하는 문제
// 아래 코드는 useEffect의 부수 효과 함수에 2개의 상태값을 사용하고 의존성 배열에는 'value1'하나의 상태값만 입력한 코드임

// 'value2'가 변경되더라도 부수 효과 함수는 새로 생성이 되겠지만 의존성 배열에는 'value2'가 없어 리액튼는 방금 생성된 부수 효과 함수는 무시함
// 따라서 'value1'이 변경될 때 생성된 함수를 계속 사용함 이렇게 되면 실행 컨텍스트는 그 당시에 기억한 예전'value2'를 바라봄
// 이렇게 의존성 배열에 'value2'를 입력하지 않으면 오래된 'value2'를 사용하게 되는 문제가 생김

function MyComponent() {
    const [value1, setValue1] = useState(0); 
    const [value2, setValue2] = useState(0); 
    useEffect(() => {
        const id = setInterval(() => console.log(valuel, value2), 1000);
        return () => clearInterval(id); 
    }, [value1]);
    return (
        <div>
            <button onclick={() => setValue1(value1 + 1)}>value1 증가</button>
            <button onclick={() => setValue2(value2 + 1)}>value2 증가</button> 
        </div>
    );
}