// React 의 이벤트는 소문자 대신 camelCase 를 사용한다.
// JSX 를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달한다.
// React 에서는 반드시 preventDefault 를 통해 기본동작을 방지 해야한다.

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn : true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn : !prevState.isToggleOn,
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

class LoggingButton extends React.Component {
    handleClick = () => {
      console.log(`this is ${this}`)
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                THIS
            </button>
        );
    }
}

function App() {

    return (
        <div>
            <Toggle/>
            <LoggingButton/>
        </div>
    );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)