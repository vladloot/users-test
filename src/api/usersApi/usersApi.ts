import axios from "axios"
import {usersType} from "../../store/action/action-creators";

const instance = axios.create({
    baseURL: 'https://yalantis-react-school-api.yalantis.com/api/task0/users',
})

export const usersApi = {
    getCards() {
        return instance.get<usersType>('')
    },
}