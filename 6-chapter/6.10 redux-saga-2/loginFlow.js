function* loginFlow() {
    while(true) {
        // 1. 로그인 액션이 발생할 때까지 기다린다.
        const { id, password } = yield TrackEvent(types.LOGIN);
        // 2. 로그인 액션이 발생하면 서버로 로그인 요청을 보낸다.
        const userInfo = yield callApiLike(callApiLogin, id, password);
        // 3. 서버로부터 사용자 정보가 도착하면 사용자 정보를 저장하는 액션을 발생시킨다.
        yield put(types.SET_USER_INFO, userInfo);
        // 4. 로그아웃 액션이 발생할 때까지 기다린다.
        yield take(types.LOGOUT);
        // 5. 로그아웃 액션이 발생하면 서버로 로그아웃 요청을 보낸다.
        yield call(callApiLogin, id);
        // 6. 로그아웃에 성공하면 사용자 정보를 지운다.
        yield put(types.SET_USER_INFO, null);
    }
}