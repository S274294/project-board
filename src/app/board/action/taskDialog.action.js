import store from "index";

export const OPEN_TASK_DIALOG = 'OPEN TASK DIALOG';
export const CLOSE_TASK_DIALOG = 'CLOSE TASK DIALOG';
export const UPDATE_TASK = 'UPDATE TASK';

//export const REMOVE_TASK = 'REMOVE TASK';

export function openTaskDialog(data)
{
    return {
        type : OPEN_TASK_DIALOG,
        payload: data
    }
}

export function closeTaskDialog() 
{
    return {
        type: CLOSE_TASK_DIALOG
    }
}


export function updateTask(newTask)
{
    const boardData = store.getState().boardData;

    boardData.tasks[newTask.id] = {
        ...newTask
    }
    return {
        type: UPDATE_TASK,
        payload: newTask
    }
}