function Parent() {
    const [selectedFruit, setSelectedFruit] = useState('apple'); 
    const [count, setCount] = useState(0);

    const onChangeFruit = useCallback(fruit => {
        setSelectedFruit(fruit);
        sendLog({ type: 'fruit change', value: fruit });
    }, []);

    return ( 
        <div>
            <p>{`count: ${count}`}</p>
            <button onClick={() => setCount(count + 1)}>increase count</button> 
            <SelectFruit
                selected={selectedFruit} 
                onChange={setSelectedFruit}
                // 만약 이벤트 핸들러에서 간단하게 처리하고 끝나지 않고 다른 처리가 더 필요하다면 
                // useCallback을 사용해서 작성해주면 함수가 필요할 때만 변경이 됨.
            />
        </div>
    );
}
    