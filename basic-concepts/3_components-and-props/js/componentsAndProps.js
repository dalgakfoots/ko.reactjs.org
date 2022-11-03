
// 함수 컴포넌트
// 데이터를 가진 하나의 props 객체 인자를 받은 후, React 엘리먼트를 반환한다.
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

//클래스를 사용하여 컴포넌트를 정의할 수도 있음.
class _Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// 컴포넌트의 이름은 항상 대문자로 시작한다.
const element = <Welcome name="Yeonmin"/>;

// 컴포넌트 합성
function App() {
    return (
      <div>
          <Welcome name="vivi"/>
          <Welcome name="vly"/>
          <Welcome name="Goorm"/>
          <Welcome name="Jjini"/>
      </div>
    );
}

function formatDate(date) {
    return date.toLocaleDateString();
}



function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}/>
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

// 컴포넌트 추출
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
);
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

root.render(<Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}/>
);
