// 여러 상태값을 참조하면서 값을 변경하는 경우
// 1초에 한번씩 상태값 변경

// 여기서 의존성 배열에 second가 매 초마다 업데이트 되기 때문에
//setInterval을 사용한게 무색하게도 1초마다 clearInterval이 호출되고 다시 setInterval을 호출함

function Timer({ initialTotalSeconds }) {
    const [hour, setHour] = useState(Math.floor(initialTotalSeconds / 3600)); 
    const [minute, setMinute] = useState(
        Math.floor((initialTotalSeconds % 3600) / 60),
    );
    const [second, setSecond] = useState(initialTotalSeconds % 60); useEffect(() => { 
        const id = setInterval(() => { 
            if (second) {
                setSecond(second - 1);
            } else if (minute) {
                setMinute(minute - 1);
                setSecond (59); 
            } else if (hour) {
                setHour(hour - 1);
                setMinute(59);
                setSecond(59);
            }
        }, 1000);
        return () => clearInterval(id); 
    }, [hour, minute, second]);
    // ...
}
    