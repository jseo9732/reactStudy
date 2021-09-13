// 속성값의 타입정보를 정의
MyComponent.propTypes = {
    // ...
};

// 컴포넌트 함수 작성 (이름 부여 => 디버깅에 용이함)
// 컴포넌트의 매개변수는 명명된 매개변수 문법으로 작성하는게 좋음(props. 반복 방지)
export default function MyComponent({ prop1, prop2 }) {
    // ...
}

// 컴포넌트 밖에 있는 변수와 함수는 파일의 가장 밑에 정의하는게 좋음
// 변수명은 대문자로 해주는 것이 좋음(변하지 않는 값이라는 것을 알리기 위함)
// 밑에 'COLUMNES'처럼 다소 크기가 있는 객체는 컴포넌트 밖에서 생성 권장 (컴포넌트 안에 있으면 렌더링 떄마다 생성되기 때문, 성능 떨어짐)
const COLUMNES = [
    { id: 1, name: 'phoneNumber', width: 200, color: 'white' }, 
    { id: 1, name: 'city', width: 100, color: 'grey' },
    // ...
];
const URL_PRODUCT_LIST = '/api/products'; 
function getTotalPrice({ price, total }) {
    // ...
}