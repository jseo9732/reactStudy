function Greeting({ isLogin, name, cash }) { 
    return ( 
        <div> '저희 사이트에 방문해 주셔서 감사합니다. 
            {isLogin ? ( 
                <div>
                    <p>{name}님 안녕하세요.</p>
                    <p>현재 보유하신 금액은 {cash} 원입니다.</p>
                </div>
            ) : null}
        </div>
    );
}

// 삼항 연산자의 끝에 null을 사용해서 아무것도 렌더링하지 않는다라는 것을 표현하는 코드
// 이럴 때는 && 길호를 사용할 것을 추천함