const delayAction = store => next => action => {
    const delay = action.meta?.delay; // 여기서 ? 기호는 optional chaining이라는 기능인데 원래는 meta값이 undefined이면 에러가 발생하는데 발생하지 않음 (최근에 추가된 자바스크립트 표준 스펙)
    if (!delay) {
        return next(action);
    }
    const timeoutId = setTimeout(() => next(action), delay);
    return function cancel() {
        clearTimeout(timeoutId);
    }
};