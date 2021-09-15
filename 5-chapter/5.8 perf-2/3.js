function Parent() {
    const [selectedFruit, setSelectedFruit] = useState('apple'); 
    const [count, setCount] = useState(0); 
    return ( 
        <div>
            <p>{`count: ${count}`}</p>
            <button onClick={() => setCount(count + 1)}>increase count</button> 
            <SelectFruit
                selected={selectedFruit} 
                onChange={fruit => setSelectedFruit(fruit)}
                // 이렇게 자식 컴포넌트 속성값에 함수를 입력하면 렌더링할 때마다 새로운 값이 입력되기 때문에
                // 리액트 memo를 사용했다고 하더라도 이 컴포넌트는 렌더링이 됨.
            />
        </div>
    );
}
    