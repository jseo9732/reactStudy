// createSelector 함수를 이용해서 선택자 함수를 만든다.
import { createSelector } from 'reselect';

// 상태값에 있는 데이터를 단순히 전달하는 함수들이고, 이 함수들도 선택자 함수이다.
const getFriends = state => state.friend.friends;
export const getAgeLimit = state => state.friend.ageLimit;
export const getShowLimit = state => state.friend.showLimit;

// 연령 제한이 적용된 친구 목록을 반환해 주는 선택자 함수를 정의한다.
export const getFriendsWithAgeLimit = createSelector(
  // 아래 함수로 전달될 인수를 정의한다. 배열의 각 함수가 반환하는 값이 순서대로 전달된다.
  [getFriends, getAgeLimit],
  // 배열의 함수들이 반환한 값을 입력받아서 처리하는 함수다.
  (friends, ageLimit) => friends.filter(friend => friend.age <= ageLimit),
);
export const getFriendsWithAgeShowLimit = createSelector(
  // getFriendsWithAgeLimit 함수는 friendsWithAgeLimit 함수를 이용한다.
  [getFriendsWithAgeLimit, getShowLimit],
  (friendsWithAgeLimit, showLimit) => friendsWithAgeLimit.slice(0, showLimit),
);