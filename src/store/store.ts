import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import {usersReducer} from "./reducers/usersReducer/usersReducer";

const rootReducer = combineReducers({
    usersReducer,
})

export const store = createStore(rootReducer,applyMiddleware(thunk))

export type rootReducerType = ReturnType<typeof rootReducer>