import * as Action from "../action/index.action"
import {CHANGE_TASK_PRIORITY} from "../action/index.action";

const initState = {
    tasks: {},
    columns: {},
    columnOrder: [],
}

const boardReducer = (state = initState, action) => {
    switch (action.type) {
        case Action.REQUEST_BOARD:
            return action.data;
        case Action.CHANGE_TASK_ORDER:
            return action.data;
        case Action.CREATE_TASK:
            return action.data;
        case  Action.CREATE_COLUMN:
            return action.data;
        case Action.TOGGLE_TASK:
            return action.data;
        case Action.UPDATE_COLUMN_TITLE:
            return {
                ...state,
                columns:{
                    ...state.columns,
                    [action.columnId]: {
                        ...state.columns[action.columnId],
                        title: action.title
                    }
                }
            }
        case Action.ADD_COLUMN_AFTER_CURRENT:
            return action.data;
        case Action.CLEAR_COLUMN_TASKS:
            return action.data;
        case Action.DELETE_COLUMN:
            return action.data
        case Action.ADD_LABEL:
            return {
                ...state,
                globalLabels: [
                    ...state.globalLabels,
                    action.payload
                ]
            };
        case Action.CHANGE_TASK_PRIORITY:
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.taskId]:{
                        ...state.tasks[action.taskId],
                        priority: action.priority
                    }
                }
            }
        default: return state;
    }
}

export default boardReducer;
