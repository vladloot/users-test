import {alphabet} from '../../constants/alphabet'
import {usersType, userType} from "../../store/action/action-creators";
import {UsersColumn} from "../users-column/users-column";

type PropsTypes = {
    users: usersType
    firstNumber: number
    lastNumber: number
}

export const UsersColumns = ({users, firstNumber, lastNumber}: PropsTypes) => {

    if (!users.length) {
        return null;
    }

    const usersColumns = alphabet.slice(firstNumber, lastNumber).map(item => {
        const filteredUsers = users.filter((user: userType) => user.firstName[0].toLowerCase() === item)
        return <UsersColumn users={filteredUsers} title={item} key={item}/>
    })

    return (
        <>
            {usersColumns}
        </>
    )
}