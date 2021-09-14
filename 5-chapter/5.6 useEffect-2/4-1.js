// 속성값으로 전달되는 'onClick'같은 함수는 자주 변경되는 경우가 많음
// 내용은 그대로인데 렌더링할 때마다 변경되는 경우가 많음 이로 인해 부수효과 함수가 불필요하게 자주 호출될 수 있음
// 만약 이를 해결하는 마땅한 방법이 떠오르지 않는 다면 useRef 훅이 해결책이 될 수 있음 ('4-2.js'로)

function MyComponent({ onClick }) {
    useEffect(() => { 
        window.addEventListener('click', () => {
            onClick();
            // ...
        }, []);
    }, [onClick]);
    // ...
}
    