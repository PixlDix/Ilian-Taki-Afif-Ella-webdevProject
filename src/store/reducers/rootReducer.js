import authReducer from './authReducer'
import resultReducer from './resultReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    results: resultReducer
})

export default rootReducer