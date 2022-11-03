import React , {useState} from 'react';

// useState 가 Hook 이다.
// Hook 은 함수형 컴포넌트에서, React State 와 생명주기 기능을
// 연동 (hook into) 할 수 있게 해주는 함수이다.
// Hook 은 class 안에서는 동작하지 않는다. 대신 class 없이 React 를 사용할 수 있게 해준다.

export default function Example() {

    // useState 는 현재 state 값과 이 값을 업데이트 하는 함수를 쌍으로 제공한다.
    // 이 함수는 이벤트핸들러나 다른 곳에서 호출 가능하다.
    // 이것은 class 의 this.setState 와 거의 유사하지만,
    // 이전 state 와 새로운 state 를 합치지 않는다는 차이점이 있다.

    const [count, setCount] = useState(0); // useState 는 인자로 초기 state 값을 하나 받는다.
    // 이 초기값은 객체 일 필요가 없다.
    // 이 초기값은 첫번째 렌더링에만 딱 한번 사용된다.

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount( count + 1) }>
                Click me
            </button>
        </div>
    );

}