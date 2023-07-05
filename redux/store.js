import { configureStore } from "@reduxjs/toolkit";
import TodosSlice from "../Todos/TodosSlice";

export const store = configureStore({
    reducer:{
        todos:TodosSlice
        
    }
})