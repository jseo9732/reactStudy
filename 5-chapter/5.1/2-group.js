// 컴포넌트 내부에서 서로 연관된 코드는 한 곳으로 모아서 관리하는게 좋음

function Profile({ userId }) {
    const [user, setUser] = useState(null); 
    const [width, setWidth] = useState(window.innerWidth); 
    useEffect(() => {
        getUserApi(userId).then(data => setUser(data)); 
    }, [userId]); 
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth); 
        window.addEventListener("resize", onResize); 
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);
    // ...
}

// 위는 useState, useEffect끼리 모아둔 것이고
// 아래는 서로 연관된 코드끼리 모아둔 것 => 별오의 커스텀 훅으로 분리하기도 좋음

function Profile({ userId }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUserApi(userId).then(data => setUser(data)); 
    }, [userId]); 

    const [width, setWidth] = useState(window.innerWidth); 
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth); 
        window.addEventListener("resize", onResize); 
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);
    // ...
}

// 아래는 커스텀 훅으로 분리한 코드
function Profile({ userId }) {
    const user = useUser(userId);
    const width = useWindowWidth();
    // ...
}