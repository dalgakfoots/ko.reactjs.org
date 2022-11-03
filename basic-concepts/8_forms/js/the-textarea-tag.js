// HTML 에서 <textarea> 엘리먼트는 텍스트를 자식으로 정의한다.
/*
<textarea>
    Hello there , this is some text in a text area.
</textarea>
 */

// React 에서 <textarea>는 value 어트리뷰트를 대신 사용한다.
// 한줄 입력을 사용하는 폼과 비슷하게 작성이 가능해진다.

class EssayForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'Please write an essay about your favorite DOM element.' // 생성자에서 this.state.value 를 초기화 하고 있어 일부 텍스트를 가진채 시작된다.
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        alert('An essay was submitted: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type='submit' value='Submit'/>
            </form>
        );
    }

}


const root = ReactDOM.createRoot(document.getElementById('textArea'));
root.render(<EssayForm/>)