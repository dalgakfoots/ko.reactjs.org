function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    );
}

// 어떤 컴포넌트들은 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우가 있습니다.
// 범용적인 ‘박스’ 역할을 하는 Sidebar 혹은 Dialog와 같은 컴포넌트에서 특히 자주 볼 수 있습니다.
// 이러한 컴포넌트에서는 특수한 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋습니다.

function WelcomeDialog() {

    // 다른 컴포넌트에서 JSX를 중첩하여 임의의 자식을 전달할 수 있습니다.
    // <FancyBorder> JSX 태그 안에 있는 것들이 FancyBorder 컴포넌트의 children prop으로 전달됩니다.
    // FancyBorder는 {props.children}을 <div> 안에 렌더링하므로 전달된 엘리먼트들이 최종 출력됩니다.

    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WelcomeDialog/>);