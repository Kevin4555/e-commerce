import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
    updateUser(state, action) {
      return action.payload;
    },
    removeUser(state, action) {
      return {};
    },
  },
});

const { actions, reducer } = usersSlice;
export const { setUser, removeUser, updateUser } = actions;
export default reducer;
