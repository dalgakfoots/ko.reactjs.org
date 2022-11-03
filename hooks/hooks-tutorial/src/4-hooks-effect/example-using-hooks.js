import React, {useState , useEffect} from "react";

function Example() {
    const [count, setCount] = useState(0);

    // React 에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야 하는지 전달한다.
    // DOM 업데이트를 수행한 이후에 호출된다.
    useEffect(() => {
        document.title = `you clicked ${count} times`;
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