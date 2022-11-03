import React , {useState , useEffect} from "react";

export default function EffectExample() {
    const [count, setCount] = useState(0);

    // componentDidMount, componentDidUpdate 와 비슷하다.
    useEffect( () => {
        // React 는 DOM 을 바꾼 뒤, effect 함수를 실행한다.
        // Effects 는 컴포넌트 안에 선언되어 있기 때문에, props 와 state 에 접근할 수 있다.
        // 기본적으로 React 는 매 렌더링 이후에 effects 를 실행한다.
        // (첫번째 렌더링을 포함하여)
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}