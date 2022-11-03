function Blog(props) {
    const sidebar = (
        <ul>
        {props.posts.map( // Key 는 배열 안에서 형제 사이에서 고유해야 하고, 전체 범위에서 고유할 필요는 없다.
                (post) => <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );


    const content = props.posts.map((post) => // 두 개의 다른 배열을 만들 때, 동일한 key 를 사용할 수 있다.
       <div key={post.id}>
           <h3>{post.title}</h3>
           <p>{post.content}</p>
       </div>
    );

    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'you can install react from npm.'},
];

const root = ReactDOM.createRoot(document.getElementById('blogRoot'));
root.render(<Blog posts={posts}></Blog>)