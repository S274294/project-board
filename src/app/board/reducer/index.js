import { combineReducers } from "redux";
import boardData from "./board.reducer";
import operation from "./addtask-reducer";
import selector from "./selector.reducer";

const boardAppReducers = combineReducers({
    boardData,
    operation,
    selector
})

export default boardAppReducers;
