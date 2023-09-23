import { combineReducers, type AnyAction, type Reducer } from "redux"

import type { RootState } from "."
import auth from "./slices/auth"

const reducers = combineReducers({
  auth,
})

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === "auth/logoutUser" || action.type === "admin/logout") {
    // check for action types
    console.log("reducer reset")
    state = {} as RootState
  }
  return reducers(state, action)
}

export default rootReducer
