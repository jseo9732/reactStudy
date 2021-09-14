// 이전 상태값을 기반으로 다음 상태값을 계산하기 위해 상태값을 의존성 배열에 추가하는 경우
// 아래 코드는 상태값을 하나씩 증가시키기 위해서 count 변수가 필요함
// '3.js'에 이어서

function MyComponent() {
    const [count, setCount] = useState(0); 
    useEffect(() => {
        function onClick() {
            setCount(count + 1);
        }
        window.addEventListener('click', onClick);
        return () => window.removeEventListener("click", onClick); 
    }, [count]);
    // ...
}
    