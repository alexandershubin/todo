import {configureStore} from "@reduxjs/toolkit";
import {todosSlice} from "./store";

const store = configureStore({
    reducer: {
        todos: todosSlice.reducer
    },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
