const root = ReactDOM.createRoot(document.getElementById('root'));

class Clock extends React.Component {

    constructor(props) {
        super(props); // 클래스 컴포넌트는 항상 props 로 기본 constructor 를 호출해야한다.
        this.state = {date: new Date()};

    }


    //생명주기 메서드
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState(
            {date : new Date()}
        );
        // State 올바르게 사용하기
        // 1. 직접 State 를 수정하지 않기. this.state 를 지정할 수 있는 유일한 곳은 constructor 뿐임.

        // 2. state 업데이트는 비동기적일 수도 있음.
        // this.props와 this.state가 비동기적으로 업데이트 될 수 있기 때문에, 다음 state를 계산할 때, 해당 값에 의존해서는 안된다.
        // WRONG
        this.setState({
            counter : this.state.counter + this.props.increment,
        })

        // CORRECT
        this.setState( (state , props) => {
            counter : state.counter + props.increment
        });

        // 컴포넌트는 자신의 state를 자식 컴포넌트에 props로 전달할 수 있다.

    }

    render() {
        return (
            <div>
                <h1>Hello , World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

function App () {
    return (
      <div>
          <Clock/>
          <Clock/>
          <Clock/>
      </div>
    );
}

root.render(<App/>)