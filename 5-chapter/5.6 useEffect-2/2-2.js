// 이러한 경우에는 상태값 변경 함수에 함수를 입력하면 됨
// 상태값 변경 함수에 함수를 입력할 때는 'setCount'함수의 매개변수로 이전 상태값이 들어오기 때문임
// 따라서 이제 의존성 배열에서 count 상태값을 제거할 수 있음

function MyComponent() {
    const [count, setCount] = useState(0); 
    useEffect(() => { 
        function onClick() {
            setCount (prev => prev + 1);
        }
        window.addEventListener('click', onClick);
        return () => window.removeEventListener("click", onClick);
    },[]);
    /// ...
}
    