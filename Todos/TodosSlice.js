import { createSlice } from "@reduxjs/toolkit";

const TodosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "HalitBaba",
        complated: true,
      },
      {
        id: "2",
        title: "TalhaBaba",
        complated: false,
      },
    ],
  },

  reducers: {
    addTodo: (state, actions) => {
      state.items.push(actions.payload);
    },
    toogle: (state, actions) => {
      const { id } = actions.payload;
      const items = state.items.find((items) => items.id === id);
      items.complated = !items.complated;
    },
    removeTodo: (state, actions) => {
      const id = actions.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },

      


  },
});

export const { addTodo, toogle, removeTodo } = TodosSlice.actions;

export default TodosSlice.reducer;
