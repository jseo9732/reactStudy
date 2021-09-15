function Parent() {
    const [selectedFruit, setSelectedFruit] = useState('apple'); 
    const [count, setCount] = useState(0); 
    return ( 
        <div>
            <p>{`count: ${count}`}</p>
            <button onClick={() => setCount(count + 1)}>increase count</button> 
            <SelectFruit
                selected={selectedFruit} 
                onChange={setSelectedFruit}
                // '3.js'코드 처럼 단순하게 상태값을 변경하는 로직이라면 
                // 위 코드처럼 상태값 변경 함수는 그대로 입력해주면 해결됨.
            />
        </div>
    );
}
    