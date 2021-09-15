function MyComponent(props) {
    // ...
}
function isEqual(prevProps, nextProps) {
    // true 또는 false를 반환
}
React.memo(MyComponent, isEqual);

// React.memo 함수로 감싼 컴포넌트는 속성값 비교 함수가 호출 됨
// 속성값 비교 함수는 이전/이후 속성값을 매개변수로 받아서 참 또는 거짓을 반환함.
// 만약 참을 반환하면 이전 렌더링 결과를 재사용한다.
// 거짓을 반환하면 컴포넌트 함수를 실행해서 가상돔을 업데이트하고 변경된 부분만 실제 돔에 반영한다.

// 만약 React.memo에 컴포넌트를 입력하지 않아 속성값 비교 함수를 입력하지 않으면 얕은 비교를 수행하는 기본 함수가 사용이 됨.
// 이것은 항상 거짓을 반환하는 속성값 비교 함수가 사용된다고 생각할 수 있다.

// 대부분 문제가 되지 않지만 렌더링 성능이 중요한 상황에서는 memo함수를 사용해서 성능을 높일 수 있음