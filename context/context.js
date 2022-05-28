import { createContext } from "react";
import initialState from "./state";

const Context = createContext(initialState);
export default Context;