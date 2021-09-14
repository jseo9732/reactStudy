function TodoList({ todos }) { 
    const [doneList, setDoneList] = useState(todos.filter(item => item.done));
    // 부모로부터 todos를 받아 완료된 아이템만 관리하는 doneList
    function onChangeName(key, name) { 
        setDoneList(
            doneList.map(item => (item.key === key ? { ...item, name } : item)),
            // 완료된 todo의 name을 수정하는 코드
            // 특정 목록의 이름을 수정하는 순간 부모가 가진 데이터와 정합이 안 맞아 버그가 생김
            // 자식 컴포넌트에서 부모의 데이터를 별도의 상태값으로 관리하는 것은 좋지 않음
        );
    }
    // ...
}
