function Greeting({ isLogin, name, cash }) { 
    return ( 
        <div> '저희 사이트에 방문해 주셔서 감사합니다. 
            {isLogin && ( 
                <div>
                    <p>{name}님 안녕하세요.</p>
                    <p>현재 보유하신 금액은 {cash} 원입니다.</p>
                </div>
            )}
        </div>
    );
}

// 끝에 null을 붙이지 않아도 되는 이점이 있고
// 코드가 복잡해지면 && 기호를 이용한 것이 코드 파악에 더 좋음