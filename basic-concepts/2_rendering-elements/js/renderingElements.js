const root = ReactDOM.createRoot(document.getElementById('root'));


// React 엘리먼트는 불변객체이다.
// 엘리먼트를 생성한 이후에는 해당 엘리먼트의 자식이나 속성을 변경할 수 없다.
const element = <h1>Hello, World!</h1>;

function tick() {
    const tickElement = (
        <div>
            <h1>Hello, World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    root.render(tickElement);
}

setInterval(tick, 100);
// root.render(element);