// ※바벨 설치없이 이대로 실행해주면 JSX문법은 자바스크립트 표준이 아니기때문에 에러가 남 => 바벨을 설치 해줘야 함

function LikeButton() {
    const [liked, setLiked] = React.useState(false);
    const text = liked ? '좋아요 취소' : '좋아요';
    return <button onClick={ () => setLiked(!liked) }>{ text }</button>;
    // return React.createElement(
    //     'button',
    //     { onClick: () => setLiked(!liked) },
    //     text,
    // );
}

function Container() {
    const [count, setCount] = React.useState(0);
    return (
    <div>
        <LikeButton />
        <div>
            <span>현재 카운트: </span>
            <span style={{ marginRight: 10 }}>{ count }</span>
            <button onClick={ () => setCount(count + 1) }>증가</button>
            <button onClick={ () => setCount(count - 1) }>감소</button>
        </div>
    </div>
    );
    // return React.createElement(
    //     "div", 
    //     null, 
    //     React.createElement(LikeButton, null), 
    //     React.createElement(
    //         "div", 
    //         { style: { marginTop: 20 } }, 
    //         React.createElement("span", null, "현재 카운트: "), 
    //         React.createElement("span", { style: { marginRight: 10 } }, count), 
    //         React.createElement(
    //             "button", 
    //             { onClick: () => setCount(count + 1) }, 
    //             "증가",
    //         ), 
    //         React.createElement(
    //             "button", 
    //             { onClick: () => setCount(count - 1) }, 
    //             "감소",
    //         )
    //     )
    // );
}
  
  const domContainer = document.getElementById('root');
  ReactDOM.render(React.createElement(Container), domContainer);