import store from "../../../index";

export const UPDATE_COLUMN_TITLE = "UPDATE_COLUMN_TITLE";
export const ADD_COLUMN_AFTER_CURRENT = "ADD_COLUMN_AFTER_CURRENT";
export const CLEAR_COLUMN_TASKS = "CLEAR_COLUMN_TASKS";
export const DELETE_COLUMN = "DELETE_COLUMN";

/**
 * 更新列标题
 * @param title 新标题
 * @returns {{type: string, title: *, columnId: *}}
 */
export const updateColumnTitle = (title, columnId) => {

    return {
        type: UPDATE_COLUMN_TITLE,
        title: title,
        columnId: columnId
    }
}
/**
 * 指定列后添加新列
 * @param title 列标题
 * @param columnId 指定的列id
 */
export const addColumnAfterCurrent = (title, columnId) => {
    const data = store.getState().boardData;
    const id = new Date().getTime() + ""

    const newColumn = {
        id: id,
        title: title,
        taskIds:[]
    }

    const columnOrder = Array.from(data.columnOrder);
    const preId = columnOrder.indexOf(columnId);
    columnOrder.splice(preId + 1, 0, id);

    const newData = {
        ...data,
        columns: {
            ...data.columns,
            [id]: newColumn
        },
        columnOrder: columnOrder
    }

    return {
        type: ADD_COLUMN_AFTER_CURRENT,
        data: newData
    }
}

/**
 * 清除列表的所有任务
 * @param columnId
 */
export const clearColumnTasks = (columnId) => {

    const data = store.getState().boardData;

    const taskIds = data.columns[columnId].taskIds;

    const tasks = Object.assign({}, data.tasks);

    taskIds.map(taskid => delete tasks[taskid]);

    const newData = {
        ...data,
        tasks: tasks,
        columns: {
            ...data.columns,
            [columnId]: {
                ...data.columns[columnId],
                taskIds: []
            }
        }
    }

    return {
        type: CLEAR_COLUMN_TASKS,
        data: newData
    }
}

/**
 * 删除列
 * @param columnId 列id
 */
export const deleteColumn = (columnId) => {
    const data = store.getState().boardData;
    const tasks = Object.assign({}, data.tasks);
    const columns = Object.assign({},data.columns);

    const columnOrder = Array.from(data.columnOrder);
    columnOrder.splice(columnOrder.indexOf(columnId), 1);

    const taskIds = Array.from(columns[columnId].taskIds);

    delete columns[columnId];

    taskIds.map(taskId => delete tasks[taskId]);

    const newData = {
        ...data,
        tasks: tasks,
        columnOrder: columnOrder,
        columns: columns
    }

    return {
        type: DELETE_COLUMN,
        data: newData
    }

}
