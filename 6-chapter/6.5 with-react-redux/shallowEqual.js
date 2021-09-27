import { shallowEqual } from 'react-redux';

export default function MyComponent() {
  const [value1, value2, value3] = useSelector(
    state => [state.value1, state.value2, state.value3],
		// 두번째 매개변수에 shallowEqual 함수를 입력하면 배열의 각 원소가 변경됐는지 검사한다.
    shallowEqual,
  );
}