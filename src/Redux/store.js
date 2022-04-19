import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import todoSlice from "./todoSlice";

const store = configureStore({
    reducer: {
        todo: todoSlice,
        theme: themeSlice
    }
});

export default store;