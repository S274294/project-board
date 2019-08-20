import store from "../../../index";


export const OPEN_ADD_TASK = "OPERATION_OPEN_ADD_TASK";
export const CLOSE_ADD_TASK = "OPERATION_CLOSE_ADD_TASK";

export const openAddTask = (columnId) => {
    return {
        type: OPEN_ADD_TASK,
        columnId: columnId
    }
}

export const closeAddTask = () => {
    return {
        type: CLOSE_ADD_TASK
    }
}

