
const scaleNames = {
    c: 'Celcius',
    f: 'Fahrenheit',
};

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }


    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }

}

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature : '', scale: 'c'}
    }

    // React 애플리케이션 안에서 변경이 일어나는 데이터에 대해서는
    // source of truth 를 하나만 두어야 한다.
    // 보통의 경우, state 는 렌더링에 그 값을 필요로 하는 컴포넌트에 먼저 추가된다.
    // 그러고 나서 다른 컴포넌트도 역시 그 값이 필요하게 되면
    // 그들의 가장 가까운 공통 조상으로 끌어올리면 된다.

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});

    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    // state 를 끌어올리는 작업은 양방향 바인딩 접근 방식 보다
    // 더 많은 보일러 플레이트 를 유발하지만,
    // 버그를 찾고 격리하기 더 쉽게 만드는 장점이 있다.

    render() {

        // 어떤 값이 props 또는 state 로부터 계산될 수 있다면
        // 그 값을 state 로 두어서는 안된다.
        // celsiusValue 와 fahrenheitValue 를 둘 다 저장하는 대신,
        // 최근 변경된 temperature 와 scale 만 저장하면 된다.
        // 다른 입력 필드의 값은 항상 그 값들에 기반해서 render() 메서드 안에서 계산될 수 있다.

        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;


        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(celsius)}
                />
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculator/>)


