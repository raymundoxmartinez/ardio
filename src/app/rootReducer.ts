import { combineReducers } from "@reduxjs/toolkit"
import profileSlice, {
  initialState as profileState,
} from "@routes/Profile/profileSlice"

export const rootInitialState = {
  profile: profileState,
}

const rootReducer = combineReducers({
  profile: profileSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
