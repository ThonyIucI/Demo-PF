import axios from "axios";
import { getAllTemplates } from "./templatesSlice";
const serverRoute = "http://localhost:3001";
export const getTemplates = async (dispatch) => {
  try {
    let templates = await axios(`${serverRoute}/templates`);
    dispatch(getAllTemplates(templates.data));
  } catch (error) {
    console.log(error);
  }
};
