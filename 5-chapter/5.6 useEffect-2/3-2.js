//  여러 상태값을 참조하면서 값을 변경할 때는 useReducer 훅을 사용하는게 좋음
// dispatch 함수는 변하지 않는 값이므로 의존성 배열을 빈 배열로 입력할 수 있음
// 값을 변경하는 로직은 reducer에서 작성

// 시/분/초를 하나의 객체로 만들어서 하나의 useState 훅으로 관리할 수도있지만
// useReducer를 사용하면 다양한 액션과 상태값을 관리하기가 용이하고 상태값 변경 로직을 여러 곳에서 재사용하기에도 좋음

function Timer({ initialTotalSeconds }) { 
    const [state, dispatch] = useReducer(reducer, {
        hour: Math.floor(initialTotalSeconds / 3600),
        minute: Math.floor((initialTotalSeconds % 3600) / 60),
        second: initialTotalSeconds % 60,
    });
    const { hour, minute, second } = state; 
    useEffect(() => {
        const id = setInterval(dispatch, 1000);
        return () => clearInterval(id); 
    },[]);
    // ...
}

function reducer(state) {
    const { hour, minute, second } = state; 
    if (second) {
        return { ... state, second: second - 1 };
    } else if (minute) {
        return { ... state, minute: minute - 1, second: 59 }; 
    } else if (hour) {
        return { hour: hour - 1, minute: 59, second: 59 }; 
    } else {
        return state;
    }
}