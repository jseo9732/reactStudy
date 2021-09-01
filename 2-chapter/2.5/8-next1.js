const elementTree = {
    type: 'div',
    props: {
        children: [ //div안에 children이 4개가 있음
            {
                type: Title, //여기에 Title 컴포넌트가 존재하기 때문에 실제 돔으로 만들 수 없음
                            // 리액트 요소 트리가 실제 돔으로 만들어지기 위해서는 모즌 리액트 요소의 타입 속성값이 문자열이어야 한다.
                props: { title:'리액트 공부하기' },
                // ...
            },
            {
                type: 'p',
                props: { children:'실전 리액트 프로그래밍을 공부한다' },
                // ...
            },
            {
                type: 'p',
                props: { children:'우선순위 높음' },
                // ...
            },
            {
                type: 'button',
                props: { 
                    onClick: function () {
                        // Todo 컴포넌트의 onClick 함수
                    },
                    children:'우선순위 변경'
                },
                // ...
            }
        ],
    },
    // ...
}