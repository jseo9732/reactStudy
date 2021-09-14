function MyComponent({ onClick }) {
    const onClickRef = useRef();
    onClick.current = onClick;
    //ref 객체는 이렇게 컴포넌트 함수에서 직접 변경해도 된다고 생각할 수 있지만 한가지 문제가 있음
    // '4-2.js'처럼 부수효과 함수에서 ref를 변경하는 이유는 나중에 도입될 리액트의 concurrent mode 때문
    // concurrent mode로 동작할 때는 컴포넌트 함수가 실행되어도 중간에 렌더링이 취소될 수 있음
    // 렌더링은 취소됐는데 ref객체에는 잘못된 값이 저장될 수 있으므로 ref객체는 컴포넌트 함수에서 직접 수정하면 안됨
    // 나중을 위해 '4-2.js'처럼 작성하는 것이 좋음
    // ...
}