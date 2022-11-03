// 여러 input 엘리먼트를 제어해야할 때,
// 각 엘리먼트에 name 어트리뷰트를 추가하고, event.target.name 값을 통해
// 핸들러가 어떤 작업을 할 지 선택할 수 있게 한다.

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing : true,
            numberOfGuests : 2,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name='isGoing'
                        type='checkbox'
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input
                        name='numberOfGuests'
                        type='number'
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}/>
                </label>
            </form>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById('multiHandling'));
root.render(<Reservation/>)

