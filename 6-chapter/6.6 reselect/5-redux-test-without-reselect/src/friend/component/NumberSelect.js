import React from 'react';

export default function NumberSelect({ value, options, postfix, onChange }) {
  return (
    <div>
      <select
        onChange={e => {
          const value = Number(e.currentTarget.value);
          // 사용자가 옵션을 선택하면 이를 부모 컴포넌트에게 알려준다.
          onChange(value);
        }}
        value={value}
      >
        {/* 부모 컴포넌트가 알려 준 옵션 목록을 화면에 출력한다. */}
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {postfix}
    </div>
  );
}
