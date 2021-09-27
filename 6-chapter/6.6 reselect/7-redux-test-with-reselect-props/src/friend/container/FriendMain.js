import React, { useMemo } from 'react';
import { getNextFriend } from '../../common/mockData';
import * as actions from '../state';
import FriendList from '../component/FriendList';
import { useSelector, useDispatch } from 'react-redux';
import { makeGetFriendsWithAgeLimit } from '../state/selector';

export default function FriendMain({ ageLimit }) {
  // makeGetFriendsWithAgeLimit 함수를 이용해서 getFriendsWithAgeLimit 함수를 생성한다.
  // 이때, useMemo 훅을 이용해서 getFriendsWithAgeLimit 함수의 참조값이 변경되지 않도록 한다.
  // 결과적으로 각 컴포넌트 인스튼스는 각자의 getFriendsWithAgeLimit 함수를 확보하는 셈이다.
  const getFriendsWithAgeLimit = useMemo(makeGetFriendsWithAgeLimit, []);
  const friendsWithAgeLimit = useSelector(state =>
    getFriendsWithAgeLimit(state, ageLimit),
  );
  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriend();
    dispatch(actions.addFriend(friend));
  }
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friendsWithAgeLimit} />
    </div>
  );
}


// reselect에서 컴포넌트의 속성값 이용하기
// // ...
// // ageLimit를 속성값으로 받는다.
// export default function FriendMain({ ageLimit }) {
//   const friendsWithAgeLimit = useSelector(state =>
//     // 선택자 함수의 인수로 상태값과 속성값을 모두 넘긴다.
//     getFriendsWithAgeLimit(state, ageLimit)
//   );
//   //...
//   return (
//     <div>
//       {/* 이해를 돕기 위해 JSX부분은 필요한 코드만 남겼다. */}
//       <button onClick={onAdd}>친구 추가</button>
//       <FriendList friends={friendsWithAgeLimit} />
//     </div>
//   );
// }