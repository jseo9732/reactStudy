<div>{students && students.map(/* */)}</div>;

// 여기서 students의 타입은 배열, undefined도 될 수 있는 코드라서 undefined를 검사하고 있는 코드이다.
// 이렇게 undefined도 가능한 변수는 앞에 검사하는 코드가 필요하기 때문에 가능하다면 기본값으로 undefined가 아니라 빈 배열을 넣어주는게 좋음