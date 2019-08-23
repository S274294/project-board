import boardData from "../../../fakedata/board-data"
import store from "../../../index";

import moment from "moment";
import { AssignmentReturned } from "@material-ui/icons";
export const REQUEST_BOARD = "BOARD_REQUEST_BOARD";
export const CHANGE_TASK_ORDER = "BOARD_CHANGE_TASK_ORDER";
export const CREATE_TASK = "OPERATION_CREATE_TASK";
export const CREATE_COLUMN = "OPERATION_CREATE_COLUMN";
export const TOGGLE_TASK = "OPERATION_TOGGLE_DATA";
export const ADD_LABEL = 'ADD_LABEL';
export const CHANGE_TASK_PRIORITY = "CHANGE_TASK_PRIORITY";

/**
 * 获取board数据
 * @returns
 */
export const requestBoard = () => {
    const data = boardData;
    return {
        type: REQUEST_BOARD,
        data: data
    }
}
/**
 * 拖动结束事件处理
 * @param result 拖动结束结果参数
 */
export const onDragEnd = result => {
    const { draggableId, source, destination, type } = result;

    // 1.如果拖动的destination为空(拖到外面了)，则直接返回
    if (!destination) {
        return {
            type: null
        };
    }

    // 2.如果拖动的位置没有发生改变，则直接返回
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
        return {
            type: null
        };
    }

    const data = store.getState().boardData;
    //3. 如果拖动的类型是任务的话,则处理任务的位置顺序
    if (type === "task") {
        // 3.1如果拖动的task源位置与目标位置在同一个column中
        if (source.droppableId === destination.droppableId) {
            // 3.1.1更新当前列中taskIds的位置
            const column = data.columns[source.droppableId];
            const taskIds = Array.from(column.taskIds);
            taskIds.splice(source.index, 1);
            taskIds.splice(destination.index, 0, draggableId);

            // 3.1.2创建一个新的列数据
            const newColumn = {
                ...column,
                taskIds: taskIds
            }

            // 3.1.3更新总数据
            const newData = {
                ...data,
                columns: {
                    ...data.columns,
                    [column.id]: newColumn
                }
            }

            return {
                type: CHANGE_TASK_ORDER,
                data: newData
            };

        }
        // debugger;
        // 3.2如果拖动的task源位置与目标位置不在同一个column中
        const startColumn = data.columns[source.droppableId];
        const endColumn = data.columns[destination.droppableId];

        // 3.2.1从源列taskIds数组中移除拖拽的task,往目标列taskIds数组中添加task
        const startColumnTaskIds = Array.from(startColumn.taskIds);
        const endColumnTaskIds = Array.from(endColumn.taskIds);
        startColumnTaskIds.splice(source.index, 1);
        endColumnTaskIds.splice(destination.index, 0, draggableId);
        // 3.2.2更新原列与目标列
        const newStartColumn = {
            ...startColumn,
            taskIds: startColumnTaskIds
        }
        const newEndColumn = {
            ...endColumn,
            taskIds: endColumnTaskIds
        }

        // 3.2.3更新总数据
        const newData = {
            ...data,
            columns: {
                ...data.columns,
                [startColumn.id]: newStartColumn,
                [endColumn.id]: newEndColumn
            }
        }
        return {
            type: CHANGE_TASK_ORDER,
            data: newData
        };
    }
    // 4.如果拖动的类型是column的话，则处理columnOrder中column的顺序
    if (type === "column") {
        // 4.1获取原本的列顺序数组,并重新调整列的顺序
        const columnOrder = Array.from(data.columnOrder);
        columnOrder.splice(source.index, 1);
        columnOrder.splice(destination.index, 0, draggableId);
        const newData = {
            ...data,
            columnOrder: columnOrder
        }
        // 4.2更新总数据
        return {
            type: CHANGE_TASK_ORDER,
            data: newData
        }
    }

}

/**
 * 创建一个新的任务
 * @param columnId 列id
 * @param taskTitle 任务标题
 * @returns
 */
export const createTask = (columnId, task) => {
    const data = store.getState().boardData;
    const taskId = new Date().getTime();
    const createTime = new Date().getTime();
    const updateTime = new Date().getTime();
    const taskData = {
        id: taskId,
        ...task,
        createTime,
        updateTime,
        finish: false,
        priority: 1
    }

    // 2.在原有列上添加该任务
    const column = data.columns[columnId];
    const taskIds = Array.from(column.taskIds);
    taskIds.push(taskId);

    // 2.1在原有的tasks数组上添加该任务
    const tasks = {
        ...data.tasks,
        [taskId]: taskData
    }


    // 3.创建一个新的列对象
    const newColumn = {
        ...column,
        taskIds: taskIds
    }

    // 4.创建新的数据对象
    const newData = {
        ...data,
        tasks: tasks,
        columns: {
            ...data.columns,
            [column.id]: newColumn
        }
    }

    return {
        type: CREATE_TASK,
        data: newData
    }

}

/**
 * 创建一个新的任务列表
 * @param content
 */
export const createColumn = (content) => {
    const data = store.getState().boardData;
    // 1.创建新的列表对象
    const columnId = new Date().getTime() + "";
    const newColumn = {
        id: columnId,
        title: content,
        taskIds: []
    }
    const newColumnOrder = Array.from(data.columnOrder);
    newColumnOrder.push(columnId);
    // 2.创建新的数据对象
    const newData = {
        ...data,
        columns: {
            ...data.columns,
            [columnId]: newColumn
        },
        columnOrder: newColumnOrder
    }
    // 3.更新数据
    return {
        type: CREATE_COLUMN,
        data: newData
    }
}


export const toggleTask = (taskId) => {
    const data = store.getState().boardData;
    const task = {
        id: taskId,
        ...data.tasks[taskId],
        finish: !data.tasks[taskId].finish
    }

    const newData = {
        ...data,
        tasks: {
            ...data.tasks,
            [taskId]: task
        }
    }

    return {
        type: TOGGLE_TASK,
        data: newData
    }
}


//添加新标签
export function addLabel(label) {

    return {
        type: ADD_LABEL,
        payload: label
    }
}

/**
 * 修改任务的优先级
 * @param priority 优先级
 * @param taskId 任务id
 */
export const changeTaskPriority = (priority, taskId) => {
    return {
        type: CHANGE_TASK_PRIORITY,
        priority: priority,
        taskId: taskId
    }
}
