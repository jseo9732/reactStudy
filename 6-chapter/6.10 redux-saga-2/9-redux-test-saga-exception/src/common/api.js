export function callApiLike() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Math.random 함수를 이요해서 간헐적으로 프로미스 객체가 거부됨 상태가 되도록 한다.
      if (Math.random() * 10 < 5) {
        console.log('suc');
        resolve();
      } else {
        console.log('fail');
        reject('callApiLike 실패');
      }
    }, 1000);
  });
}
