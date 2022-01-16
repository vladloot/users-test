import {
    changeActiveStatusType,
    changeVisiblePageType,
    getUsersType,
    usersType
} from '../../action/action-creators'

const initialState = {
    users: [],
    numbersToSliceAlphabet: {
        firstNumber: 0,
        lastNumber: 3,
    },
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'GET_USERS':
            return {...state, users: action.users}
        case 'CHANGE_VISIBLE_PAGE':
            return {...state, numbersToSliceAlphabet: {firstNumber: state.numbersToSliceAlphabet.firstNumber + 3, lastNumber: state.numbersToSliceAlphabet.lastNumber + 3}}
        case 'CHANGE_ACTIVE_STATUS':
            return {...state, users: state.users.map(item => item.id !== action.id ? item : {...item, isActive: action.isActive})}
        default:
            return state
    }
}

export type numbersToSliceAlphabetType = {
    firstNumber: number
    lastNumber: number
}

type InitialStateType = {
    users: usersType
    numbersToSliceAlphabet: numbersToSliceAlphabetType
}

type ActionsType = getUsersType | changeVisiblePageType | changeActiveStatusType