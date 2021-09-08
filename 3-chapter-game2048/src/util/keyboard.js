import hotkeys from "hotkeys-js";

const observerMap = {}
export function addKeyObserver(key, callback) {
    if(!observerMap[key]) {
        observerMap[key] = [];
        hotkeys(key, () => executeCallbacks(key));
    }
    observerMap[key].push(callback);
}

export function removeKeyObserver(key, callback) {
    observerMap[key] = observerMap[key].filter(item => item !== callback);
}

function executeCallbacks(key) {
    for (const ob of observerMap[key]) {
        ob();
    }
}

//직접 구현해도 되지만 편리하게 구현하기 위해 'hotkeys-js'라는 외부 라이브러리 사용
//npm i hotkeys-js
//사용법: hotkeys(key, () => {});