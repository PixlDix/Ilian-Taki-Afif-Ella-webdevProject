export const USER_LOGIN = (email, password) => {
    return {type: 'USER_LOGIN', email, password}
}

export const USER_CREATE = (email, password) => {
    return {type: 'USER_CREATE', email, password}
}

export const USER_LOGOUT = () => {
    return {type: 'USER_LOGOUT'}
}