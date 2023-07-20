import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crudSlice",
  initialState: { loading: false, tasks: [], error: "" },
  reducers: {
    getTasks: (state, action) => {
      state.tasks = action.payload.map((t) => {
        return { _id: t._id, task: t.task };
      });
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task._id === action.payload.id
      );
      state.tasks[index].task = action.payload.task;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => task._id !== action.payload.id
      );
    },
  },
});

export const { getTasks, addTask, updateTask, deleteTask } = crudSlice.actions;

export default crudSlice.reducer;
