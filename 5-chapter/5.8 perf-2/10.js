// 값이 변경 되어야 하는데 변경되지 않아서 문제가 되는 경우

function SelectFruit({ selectedFruit, onChange }) {
    const [fruits, setFruits] = useState(['apple', 'banana', 'orange']);
    const [newFruit, setNewFruit] = useState("");

    // 새로운 과일 추가 함수
    function addNewFruit() {
        fruits.push(newFruit);
        // 위 코드로는 렌더링이 되지 않음
        setNewFruit('');
        // 위 코드로 렌더링이 수행됨 만약 위 코드가 없었다면 'fruits'값을 수정했더라도 렌더링 되지 않음
        // 심지어 setFruits(fruits)로 호출해도 위 코드가 없다면 렌더링 되지 않음 (fruits값의 레퍼런스가 변경되지 않았기 때문)
    }
    // ... 
    return( 
        <div>
            <Select options={fruits} selected={selectedFruit} onChange={onChange} />
            {/* 만약 Select 컴포넌트에서 리액트 memo를 사용했다면 fruits값이 변경됐음에도 컴포넌트의 렌더링 결과는 이전 렌더링 결과를 사용하게 됨
            따라서, 새로 추가된 과일이 추가되지 않을 것임 */}
            <input
                type="text" 
                value={newFruit} 
                onChange={e => setNewFruit(e.target.value)}
            />
            <button onClick={addNewFruit}>추가하기</button>
            {/* ... */}
        </div>
    );
}