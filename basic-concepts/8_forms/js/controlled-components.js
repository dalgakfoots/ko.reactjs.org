/*
대부분의 경우, JavaScript 함수로 폼의 제출을 처리하고 사용자가 폼에 입력한 데이터에 접근하도록 하는 것이 편리합니다.
 이를 위한 표준 방식은 “제어 컴포넌트 (controlled components)“라고 불리는 기술을 이용하는 것입니다.
 */

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        alert(`A name was submitted : ${this.state.value}`);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name :
                    <input type='text' value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type='submit' value='Submit'/>
            </form>
        );
        // value 어트리뷰트는 폼 엘리먼트에 설정되므로, 표시되는 값은 항상 this.state.value 가 된다.
        // => React state 는 신뢰 가능한 단일 출처가 된다.
        // => 다른 UI 엘리먼트에 input 의 값을 전달하거나, 다른 이벤트 핸들러에서 값을 재설정할 수 있다.
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NameForm/>)