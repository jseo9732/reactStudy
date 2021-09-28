// next
function* f1() {
    console.log('f1-1');
    yield 10;
    console.log('f1-2');
    yield 20;
    console.log('f1-3');
    return 'finished';
}
const gen = f1();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
// f1-1
// { value: 10, done: false }
// f1-2
// { value: 20, done: false }
// f1-3
// { value: 'finished', done: true }



// return
const gen = f1();
console.log(gen.next());
console.log(gen.return('abc'));
console.log(gen.next());
// f1-1
// { value: 10, done: false }
// { value: 'abc', done: true }
// { value: undefined, done: true }



// throw
function* f1() {
    try{
        console.log('f1-1');
        yield 10;
        console.log('f1-2');
        yield 20;
    } catch (e) {
        console.log('f1-catch', e);
    }
}
const gen = f1();
console.log(gen.next());
console.log(gen.throw('some error'));
// f1-1
// { value: 10, done: false }
// f1-catch some error
// { value: undefined, done: true }
