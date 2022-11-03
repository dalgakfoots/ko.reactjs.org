import React , {useState , useEffect} from "react";

function FriendStatus(props) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {

        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);


        // 모든 effect 는 정리를 위한 함수를 반환할 수 있다.
        // 컴포넌트가 마운트 해제되는 때에 정리를 실행한다.
        return function cleanup() {
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };

    });

    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    } , [count]); // count 가 변경될 때만 effect 를 재실행한다.
    // 배열 내 여러 개의 값이 있다면, 그 중의 단 하나만 다를지라도 React 는 effect 를 재실행 한다.
    // 두번째 인자는 빌드 시 변환에 의해 자동으로 추가될 수도 있다.

    if (isOnline === null) {
        return 'Loading...';
    }

    return isOnline ? 'Online' : 'Offline';
}

