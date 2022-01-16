export const getUsers = (users: usersType): getUsersType => ({
    type: 'GET_USERS',
    users,
} as const)

export const changeVisiblePage = (): changeVisiblePageType => ({
    type: 'CHANGE_VISIBLE_PAGE',
} as const)

export const changeActiveStatus = (id: string, isActive: boolean): changeActiveStatusType => ({
    type: 'CHANGE_ACTIVE_STATUS',
    id,
    isActive
} as const)


export type userType = {
    id: string
    firstName: string
    lastName: string
    dob: string
    isActive: boolean
}

export type usersType = userType[]

export type getUsersType = {
    type: 'GET_USERS'
    users: usersType
}

export type changeVisiblePageType = {
    type: 'CHANGE_VISIBLE_PAGE',
}

export type changeActiveStatusType = {
    type: 'CHANGE_ACTIVE_STATUS'
    id: string
    isActive: boolean
}