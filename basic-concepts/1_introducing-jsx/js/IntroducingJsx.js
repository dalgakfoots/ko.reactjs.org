'use strict';

const user = {
    firstName: 'Yeon-Min',
    lastName: 'Kim',
};

const element = (
  <h1>
      Hello, {formatName(user)}!
  </h1>
);

const reactJsUrl = <a href="https://www.reactjs.org"> link </a>; // 속성에 따옴표를 이용해 문자열 리터럴을 정의할 수 있다.
const image = <img src={user.avatarUrl} alt="image"></img>; // JS 표현식을 삽입할 수도 있다.
const divWithChildren = ( // JSX 태그는 자식을 포함할 수 있다.
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);


function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user) {
    // JSX 도 표현식이다.
    // 컴파일이 끝나면 JSX 표현식이 정규 JS 함수 호출이 되고, JS 객체로 인식된다.

    // JSX를 if 구문 및 for loop 안에서 사용하고,
    // 변수에 할당, 인자로 사용, 반환에 사용할 수 있다.
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello,World!</h1>);

