import { configureStore, getDefaultMiddleware, Action } from "@reduxjs/toolkit"
import { ThunkAction } from "redux-thunk"
import { createLogger } from "redux-logger"
import rootReducer, { RootState } from "./rootReducer"

const middlewares = [...getDefaultMiddleware()]

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./rootReducer", () => {
    // eslint-disable-next-line
    const newRootReducer = require("./rootReducer").default
    store.replaceReducer(newRootReducer)
  })
  middlewares.push(
    createLogger({
      duration: true,
      collapsed: true,
    })
  )
}
const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
})

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store
