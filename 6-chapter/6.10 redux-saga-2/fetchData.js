export function* fetchData() {
    while (true) {
        const { timeline } = yield take(types. REQUEST_LIKE);
        yield put(actions.setLoading(true));
        yield put(actions.addLike(timeline.id, 1));
        try {
            yield call(callApiLike);
        } catch (error) {
            yield put(actions.setError(error));
            yield put(actions.addLike(timeline.id, -1));
        }
        yield put(actions.setLoading(false));
    }
}