function NumberList(props) {
    const numbers = props.numbers;
    // Key 는 React 가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다.
    // 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 한다.
    const listItems = numbers.map(
        // key 를 선택하는 가장 좋은 방법은 , 리스트의 다른 항목들 사이에서
        // 다른 항목을 고유하게 식별할 수 있는 문자열을 사용하는 것이다.
        // 대부분의 경우, 데이터의 ID 를 key  로 사용한다.

        // 렌더링 한 항목에 대한 안정적인 ID 가 없다면,
        // 최후의 수단으로 항목의 인덱스를 key 로 사용할 수 있다.
        (number) =>
            <li key={number.toString()}>
                {number}
            </li>
    );

    // 항목의 순서가 바뀔 수 있는 경우, key 에 인덱스를 사용하는것은 권장되지 않는다.
    // 이로 인해 성능의 저하 , state 관련 문제가 발생할 수 있다.

    return (
        <ul>{listItems}</ul>
    );
}

( () => // 올바른 Key 사용법 : Key 는 주변 배열의 Context 에서만 의미가 있다.
    {
        function ListItem(props) {
            return (<li>{props.value}</li>);
        }

        function NumberList(props) {
            const numbers = props.numbers;
            const listItems = numbers.map( // 경험상 map() 함수 내부에 있는 엘리먼트에 key 를 넣어주는 것이 좋다.
                number => <ListItem key={number.toString()} value={number}/>
            );

            return (
                <ul>
                    {listItems}
                </ul>
            )
        }
    }
)();

( () => {

        function ListItem(props) {
            return (<li>{props.value}</li>);
        }
        // JSX 를 사용하면 중괄호 안에 모든 표현식을 포함시킬 수 있으므로,
        // map() 함수의 결과를 인라인으로 처리할 수 있다.
        // map() 함수가 너무 중첩된다면 컴포넌트로 추출하는 것이 좋다.
        function NumberList(props) {
            const numbers = props.numbers;
            return (
              <ul>
                  {
                      numbers.map((number) =>
                        <ListItem key={number.toString()}
                                  value={number}/>
                      )
                  }
              </ul>
            );
        }
    }
)();

const numbers = [1, 2, 3, 4, 5];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers}/>);