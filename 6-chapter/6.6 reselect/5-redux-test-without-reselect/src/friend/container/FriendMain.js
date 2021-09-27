import React from 'react';
import { getNextFriend } from '../../common/mockData';
import * as actions from '../state';
import FriendList from '../component/FriendList';
import NumberSelect from '../component/NumberSelect';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

export default function FriendMain() {
  const [
    ageLimit,
    showLimit,
    friendsWithAgeLimit,
    friendsWithAgeShowLimit,
  ] = useSelector(state => {
    const { friends, ageLimit, showLimit } = state.friend;
    // 친구 목록에 연령 제한을 적용해서 새로운 목록을 만든다.
    const friendsWithAgeLimit = friends.filter(
      friend => friend.age <= ageLimit,
    );
    return [
      ageLimit,
      showLimit,
      friendsWithAgeLimit,
      // 연령 제한이 적용된 목록에 개수 제한을 적용해서 새로운 목록을 만든다.
      friendsWithAgeLimit.slice(0, showLimit),
    ];
  }, shallowEqual);
  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriend();
    dispatch(actions.addFriend(friend));
  }
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      {/* 연령 제한 옵션을 보여 준다.
      선택하면 setAgeLimit 생성되고, 리덕스의 상태값이 변경된다. */}
      <NumberSelect
        onChange={v => dispatch(actions.setAgeLimit(v))}
        value={ageLimit}
        options={ageLimitOptions}
        postfix="세 이하만 보기"
      />
      {/* 필터링된 친구 목록을 보여준다. */}
      <FriendList friends={friendsWithAgeLimit} />
      {/* 개수 제한 옵션을 보여 준다.
      선택하면 setShowLimit 생성되고, 리덕스의 상태값이 변경된다. */}
      <NumberSelect
        onChange={v => dispatch(actions.setShowLimit(v))}
        value={showLimit}
        options={showLimitOptions}
        postfix="명 이하만 보기 (연령 제한 적용)"
      />
      {/* 연령 제한과 개수 제한이 모두 저용된 친구 목록을 보여준다. */}
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
}

// 연령 제한과 개수 제한을 위한 옵션 목록
const ageLimitOptions = [15, 20, 25, MAX_AGE_LIMIT];
const showLimitOptions = [2, 4, 6, MAX_SHOW_LIMIT];
