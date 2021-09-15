function SelectFruit({ selectedFruit, onChange }) {
    // ... 
    const fruits = useMemo(() => FRUITS.filter(item => item.price <= maxPrice), [
        maxPrice,
    ]);
    return( 
        <div> 
            <Select 
                options={fruits}
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

// useMemo 훅을 이용하여 필요할 때만 fruits값이 변경되도록 할 수 있음
// useMemo안에서 사용한 상태값, 속성값을 의존성 배열에 입력해주면 됨