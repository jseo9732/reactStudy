import React, { useCallback, useState } from 'react';
// useMemo 훅과 비슷하지만 함수 메모이제이션에 특화된 훅

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [v1, setV1] = useState(0);
  const onSave = useCallback(() => saveToServer(name, age), [name, age]);
  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      <UserEdit
        // onSave={() => saveToServer(name, age)} 
        // App컴포넌트가 렌더링 될 때마다 새로운 함수가 생성돼서 입력됨 
        // 따라서 UserEdit의 속성값이 변경되기 때문에 실제론 내용이 변경되지 않았음에도 UserEdit 컴포넌트가 계속 렌더링 됨
        onSave={onSave}
        setName={setName}
        setAge={setAge}
      />
      <p>{`v1: ${v1}`}</p>
      <button onClick={() => setV1(Math.random())}>v1 수정</button>
    </div>
  );
}

const UserEdit = React.memo(function ({ onSave, setName, setAge }) {
  console.log('UserEdit render');
  return null;
});

function saveToServer(name, age) {}