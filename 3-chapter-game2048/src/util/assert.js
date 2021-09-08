//condition을 만족하지 않으면 에러throw하는 코드

export const assert = function(condition, message) {
    if (!condition) {
        throw new Error(`Assertion failed: ${message}`);
    }
};