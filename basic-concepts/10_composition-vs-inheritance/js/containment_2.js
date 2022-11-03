function Contacts() {
    return <div className="Contacts"/>;
}

function Chat() {
    return <div className="Chat"/>;
}

// <Contacts />와 <Chat />같은 React 엘리먼트는 단지 객체이기 때문에
// 다른 데이터처럼 prop으로 전달할 수 있습니다.
// 이러한 접근은 다른 라이브러리의 “슬롯 (slots)“과 비슷해보이지만
// React에서 prop으로 전달할 수 있는 것에는 제한이 없습니다.

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}

function App(){
    return (
        <SplitPane
            left={
                <Contacts/>
            }
            right={
                <Chat/>
            }
        />
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);