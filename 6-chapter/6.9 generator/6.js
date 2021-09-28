// 제너레이터 함수로 자연수의 집합을 표현
function* natualNumbers() {
    let v =1;
    while (true) {
        yield v++;
    }
}
const values = natualNumbers();
const result = take(3, map(filter(values, n => n % 2 === 0), n => n * 10));
console.log([...result]); // [20, 40, 60]
