import { configureStore } from "@reduxjs/toolkit";
import templates from "../Reducers/Templates/templatesSlice";
export default configureStore({
  reducer: {
    templates: templates,
  },
});
