import PropTypes, { func } from 'prop-types';

User.propTypes = { 
    male: PropTypes.bool.isRequired, 
    age: PropTypes.number,
    type: PropTypes.oneOf(['gold', 'silver', 'bronze']),
    // 함수의 매개변수, 반환값에 대한 타입 정보가 보이지 않음, prop-types 패키지로는 함수에 자세한 타입을 정리할 수 없음 => 주석으로 타입을 적어주기
    onChangeName: PropTypes.func, // (name: string) => void
    onChangeTitle: PropTypes.func.isRequired,
}

export default function User({ type, age, male, onChangeName, onChangeTitle }) { 
    function onClick1() {
    const msg = `type: ${type}, age: ${age ? age : '알 수 없음'}`;
    log(msg, { color: type === 'gold' ? 'red' : 'black' }); 
    // ...
    }
    function onClick2(name, title) { 
        if (onChangeName) {
            onChangeName (name);
        }
        onChangeTitle(title); 
        male ? goMalePage() : goFemalePage();
        // ...
    }
    // ...
    return null;
}

function goMalePage() {}
function goFemalePage() {}