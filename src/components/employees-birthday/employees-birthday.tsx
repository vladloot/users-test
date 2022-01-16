import React, {FC} from "react";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../store/store";
import {usersType} from "../../store/action/action-creators";
import {BirthdayUsersList} from "./users-for-month/birthday-users-list";
import {sortUsersByMonth} from "../../utils/sort-users-by-mounth";
import uuid from 'react-native-uuid';

export const EmployeesBirthday: FC = () => {

    const activeUsers = useSelector<rootReducerType, usersType>((state) => {
        return state.usersReducer.users.filter(({isActive}) => isActive);
    })

    const sortedUsers = sortUsersByMonth(activeUsers).map((monthlyUsersList: any) => {
        const key: any = uuid.v4();
        return <BirthdayUsersList key={key} monthlyUsersList={monthlyUsersList}/>
    })

    return (
        <div>
            {sortedUsers}
        </div>
    )
}