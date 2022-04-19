import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.todos.push(action.payload);

            },
            prepare: ({ text }) => {
                return {
                    payload: {
                        id: nanoid(),
                        text,
                        completed: false
                    }
                }
            }
        },
        removeTodo: {
            reducer: (state, action) => {
                state.todos = state.todos.filter(todo => todo.id !== action.payload);
            }
        },
        toggleTodo: {
            reducer: (state, action) => {
                const todo = state.todos.find(todo => todo.id === action.payload);
                todo.completed = !todo.completed;

            }
        }
    },
})

export const todoSelector = state => state.todo.todos;

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;