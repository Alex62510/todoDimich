import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    const getUser = (user: string) => <li>{user}</li>
    const usersList = users.map(getUser)

    return (
        <main>
            <h4>User list:</h4>
            <ul>
                {usersList}
            </ul>
        </main>
    )
}
export default UsersList


// Что вернёт выражение: Array.isArray(usersList)?
