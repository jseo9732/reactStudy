import React from 'react';
import { getNextFriend } from '../../common/mockData';
import { addFriend } from '../state';
import FriendList from '../component/FriendList';
import { useSelector, useDispatch } from 'react-redux';

export default function FriendMain() {
  // 컴포넌트가 리덕스 상태값을 변경에 반응하기 위해서 useSelector훅을 사용한다.
  const friends = useSelector(state => state.friend.friends);
  // 액션을 발생시키기 위해서 dispatch 함수가 필요하다.
  // useDispatch 훅을 호출하면 dispatch 함수를 반환한다.
  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriend();
    // dispatch 함수를 이용해서 친구를 추가하는 액션을 발생시킨다.
    dispatch(addFriend(friend));
  }
  console.log('FriendMain render');
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
}
