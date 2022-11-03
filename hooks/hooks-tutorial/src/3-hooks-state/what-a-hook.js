import React , {useState} from "react";

// 클래스형 컴포넌트
class _Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}

function Example() {
    // useState 는 클래스컴포넌트의 this.state 가 제공하는 기능과 같다.
    // state 변수는 React 에 의해 사라지지 않는다.
    const [count, setCount] = useState(0);
    // count 라 부르는 state 변수를 선언하고 0으로 초기화 한다.
    // count 변수의 값을 갱신하려면 setCount 를 호출하면 된다.

    // 여러개의 변수를 선언할 때, 각각 다른 이름을 지정할 수 있다.
    const [fruit, setFruit] = useState('banana');
    const [age, setAge] = useState(42);


    // 클래스 컴포넌트의 this.state.count == 함수 컴포넌트의 {count}
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}