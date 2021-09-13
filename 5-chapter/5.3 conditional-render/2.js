// 이럴 때는 if문을 이용한 위에 코드가 더 나을 것 같다고 함

function GreetingA({ isLogin, name }) { 
    if (isLogin) { 
        return (
            <p className="greeting" onClick={showMenu}>
                { `${name}님 안녕하세요.`}
            </p>
        );
    } else { 
        return ( 
        <p className="noAuth" onㅊlick={goToLoginPage}>
            권한이 없습니다.
        </p>
        );
    }
}

function GreetingB({ isLogin, name }) {
    return(
        <p
            className={isLogin ? 'greeting' : 'noAuth'}
            onclick={isLogin ? showMenu : goToLoginPage}
        >
            {isLogin ? `${name}님 안녕하세요.` : '권한이 없습니다.'}
        </p>
    );
}