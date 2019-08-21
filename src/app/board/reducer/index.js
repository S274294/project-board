import { combineReducers } from "redux";
import boardData from "./board.reducer";
import operation from "./addtask-reducer";
import selector from "./selector.reducer";
import taskDialog from "./taskDialog.reducer";

const boardAppReducers = combineReducers({
    boardData,
    operation,
    selector,
    taskDialog
})

export default boardAppReducers;
