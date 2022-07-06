import { createSlice } from "@reduxjs/toolkit";

export const templatesSlice = createSlice({
  name: "templates",
  initialState: {
    allTemplates: [],
    detail: {},
  },
  reducers: {
    getAllTemplates: (state, action) => {
      state.templates = action.payload;
    },
    getTemplateDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});
export const { getAllTemplates, getTemplateDetail } = templatesSlice.actions;
export default templatesSlice.reducer;
