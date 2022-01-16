import {Dispatch} from "redux";
import {usersApi} from "../../../api/usersApi/usersApi";
import {getUsers} from "../../action/action-creators";

export const fetchUsers = () => (dispatch: Dispatch) => {
    usersApi.getCards()
        .then((res) => {
            const dataWithActivityField = res.data.map(item => ({...item, isActive: false}))
            dispatch(getUsers(dataWithActivityField))
        })
}