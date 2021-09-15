const prevProps = {
    todos: [
        { title: 'fix bug', priority: 'high' },
        { title: 'meeting with jone', priority: 'low' },
        // ...
    ],
    friends: [],
};
const nextProps = {
    todos: [
        { title: 'fix bug', priority: 'high' },
        { title: 'meeting with jone', priority: 'high' },
        // ...
    ],
    friends: [],
};

// 이전/이후 속성값을 가지고 있을 때 속성값이 변경 됐는지 어떻게 판단할 수 있을까?
// 위의 코드에서 'meeting with jone'가 low에서 high로 변경 됐음.

// 1. 가장 간단, 무식한 방법: 모든값을 다 비교하는 것
// 2. 객체를 불변 객체로 관리하는 것 => 이렇게 이전/이후 값의 단순 비교만으로 컴포넌트의 속성삾이 변경 됐는지 알 수 있음 => 렌더링 성능에 큰 도움

// 리액트에서 사용하는 얕은 비교
// const isEqual = prevProps.todos === nextProps.todos && preProps.friends === nextProps.friends