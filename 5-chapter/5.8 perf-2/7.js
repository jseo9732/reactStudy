function SelectFruit({ selectedFruit, onChange }) {
    // ... 
    return( 
        <div> 
            <Select 
                options={FRUITS}
                selected={selectedFruit} 
                onChange={onChange}
            />
            {/* ... */}
        </div> 
    );
}

const FRUITS = [
    { name: 'apple', price: 500 },
    { name: 'banana', price: 1000 },
    { name: 'orange', price: 1500 },
];

// 객체값이 항상 같은 값을 가지고 있다면 컴포넌트 밖으로 빼서 
// 상수 변수로 관리해서 입력을 하면 이 값은 변하지 않는 값이 됨.