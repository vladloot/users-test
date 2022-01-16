import style from './users-column.module.css'
import {UserInfo} from "../user-info/user-info";
import {userType} from "../../store/action/action-creators";

type propsType = {
    users: userType[]
    title: string
};

export const UsersColumn = ({users, title}: propsType) => {

    const userInfo = users.map(item => {
        return (
            <UserInfo
                key={item.id}
                firstName={item.firstName}
                id={item.id}
                isActiveStatus={item.isActive}/>
        )
    })

    return (
        <div className={style.userWrapper}>
            <span className={style.title}>{title.toUpperCase()}</span>
            {userInfo}
        </div>
    )
}