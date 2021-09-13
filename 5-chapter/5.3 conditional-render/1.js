// 조건부 렌더링 예시

function GreetingA({ isLogin, name }) {
    if (isLogin) {
        return <p>{`${name} 님 안녕하세요.`}</p>;
    } else {
        return <p>권한이 없습니다.</p>;
    }
}


// 삼항연산자를 이용한 위와 같은 코드
function GreetingB({ isLogin, name }) {
    return <p>{isLogin ? `${name}님 안녕하새요.` : '권한이 없습니다.'}</p>;
}
    