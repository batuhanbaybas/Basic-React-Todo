import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        dark: localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : false,
    },
    reducers: {
        toggleTheme: (state) => {
            state.dark = !state.dark
            localStorage.setItem('dark', JSON.stringify(state.dark))
        }
    }
})

export const themeSelector = state => state.theme.dark;

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;