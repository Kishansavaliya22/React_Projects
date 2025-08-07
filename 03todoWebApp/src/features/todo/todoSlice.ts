import { createSlice } from "@reduxjs/toolkit";

interface ITodos {
  id: string;
  text?: string;
}

interface IAction {
  payload: ITodos;
}

interface IInitialState {
  todos: ITodos[];
}

const initialState: IInitialState = {
  todos: [
    {
      id: "1",
      text: "Hello World",
    },
  ],
};

export const todoSlice = createSlice({
  name: "ToDo",
  initialState,
  reducers: {
    addToDo: (state: IInitialState, action: IAction) => {
      const todo = {
        id: action.payload.id,
        text: action.payload.text,
      };
      state.todos.push(todo);
    },

    removeToDo: (state: IInitialState, action: IAction) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    updateToDo: (state: IInitialState, action: IAction) => {
      state.todos.map((todo) => {
        if (todo.id == action.payload.id) {
          todo.text = action.payload.text;
        }
      });
    },
  },
});

export const { addToDo, removeToDo, updateToDo } = todoSlice.actions;
export default todoSlice.reducer;
