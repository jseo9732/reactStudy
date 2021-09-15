function SelectFruit({ selectedFruit, onChange }) {
    const [fruits, setFruits] = useState(['apple', 'banana', 'orange']);
    const [newFruit, setNewFruit] = useState("");

    // 새로운 과일 추가 함수
    function addNewFruit() {
        // fruits.push(newFruit);
        setFruits([...fruits, newFruit])
        //이렇게 새로운 배열을 만들어 줘야함
        setNewFruit('');
    }
    // ... 
    return( 
        <div>
            <Select options={fruits} selected={selectedFruit} onChange={onChange} />
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