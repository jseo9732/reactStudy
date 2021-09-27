import { createSelector } from 'reselect';

const getFriends = state => state.friend.friends;
// 단순히 두번째 매개변수를 사용한다.
const getAgeLimit = (_, ageLimit) => ageLimit;

// 리팩터링 후
// 선택자 함수를 생성하는 함수를 정의한다.
export const makeGetFriendsWithAgeLimit = () => {
  return createSelector([getFriends, getAgeLimit], (friends, ageLimit) =>
    friends.filter(friend => friend.age <= ageLimit),
  );
};
// 기존 getFriendsWithAgeLimit, getFriendsWithAgeShowLimit 함수는 삭제한다.

// 리팩터링 전
// export const getFriendsWithAgeLimit = createSelector(
//   [getFriends, getAgeLimit],
//   (friends, ageLimit) => friends.filter(friend => friend.age <= ageLimit),
// );
// export const getShowLimit = state => state.friend.showLimit;
// export const getFriendsWithAgeShowLimit = createSelector(
//   [getFriendsWithAgeLimit, getShowLimit],
//   (friendsWithAgeLimit, showLimit) => friendsWithAgeLimit.slice(0, showLimit),
// );
