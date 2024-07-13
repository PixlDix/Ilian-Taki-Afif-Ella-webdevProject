const initState = {
    users: [
        {email: 'test@test', password: 'test'}
    ],
    user: {email: '', password: ''},
    anon: false,
    created: false,
    autherror: null
}

const findUser = (state, email, password = null) => {
    email = email.toLowerCase()
    return state.users.reduce((curr, item) => {
        if (curr === null && item.email === email && (password === null || item.password === password)) {
            return item 
        }
        return null
    }, null)
}

const authReducer = (state = initState, action) => {
    if (action.type === 'USER_LOGIN') {
        console.log(action)
        const foundUser = findUser(state, action.email, action.password)
        if (foundUser !== null) {
            return {
                ...state,
                user: {email: foundUser.email},
                anon: false,
                created: false
            }
        } else {
            return {
                ...state,
                autherror: 'LOGIN_ERROR' 
            }
        }
    }
    else if (action.type === 'USER_CREATE') {
        console.log(action)
        if (findUser(state, action.email) !== null) {
            return {
                ...state,
                autherror: 'USER_EXISTS' 
            }
        } else {
            return {
                ...state,
                users: [...state.users, {email: action.email, password: action.password}],
                created: true
            }
        }
    }
    else if (action.type === 'USER_LOGOUT') {
        console.log(action)
        return {
            ...state,
            user: {email: ''},
            anon: true,
            created: false
        }
    }
    else {
        return state
    }
}

export default authReducer