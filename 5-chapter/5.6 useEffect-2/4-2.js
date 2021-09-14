// useRef 훅이 해결책
// 부수효과 함수에서 사용된 ref객체는 의존성 배열에 추가할 필요가 없음
// 하지만 의존성 배열에 함수를 입력하지 않으려고 너무 애쓰는 것 같아 보임! 불필요한 코드와 연산이 추가되기도 함
// 이런 부분이 리액트 훅의 단점이긴 함

function MyComponent({ onClick }) {
    const onClickRef = useRef(); 
    useEffect(() => {
        onClickRef.current = onClick; 
    },[]); 
    useEffect(() => {
        window.addEventListener("click", () => {
            onclickRef.current();
            // ...
        });
        /// ...
    });
    /// ...
}
    