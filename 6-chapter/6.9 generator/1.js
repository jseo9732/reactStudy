// 별표와 함께 정의된 함수는 제너레이터 함수이다.
function* f1() {
    // yield 키워드를 사용하면 함수의 실행을 멈출 수 있다.
    yield 10;
    yield 20;
    return 'finished';
}
// 제너레이터 함수를 실행하면 제너레이터 객체가 반환된다.
const gen = f1();