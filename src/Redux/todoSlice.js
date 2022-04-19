import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
    },
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.todos.push(action.payload);
                localStorage.setItem('todos', JSON.stringify(state.todos));

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
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }
        },
        toggleTodo: {
            reducer: (state, action) => {
                const todo = state.todos.find(todo => todo.id === action.payload);
                todo.completed = !todo.completed;
                localStorage.setItem('todos', JSON.stringify(state.todos));

            }
        }
    },
})

export const todoSelector = state => state.todo.todos;

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;