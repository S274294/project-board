import store from "../../../index";
import * as Action from "./board.action";


export const SELECTOR_TASK_ORDER = "SELECTOR_TASK_ORDER";

export const taskOrder = (order) => {
    return {
        type: SELECTOR_TASK_ORDER,
        order: order
    }
}
export const reorderBoardData = (boardData, order) => {
    if(order === "DEFAULT"){
        return boardData;
    }
    const columnOrder = boardData.columnOrder;
    const newColumns = boardData.columns;
    columnOrder.map(columnId => {
        const column = boardData.columns[columnId];
        const taskIds =Array.from(column.taskIds);
        taskIdsFilter(taskIds, order, boardData);

        newColumns[columnId] = {
            ...column,
            taskIds: taskIds
        }
    })

    return {
        ...boardData,
        columns: newColumns
    };

}

const taskIdsFilter = (taskIds, order, boardData) => {
    switch (order) {
        case "START_FIRST":
            taskIds.sort((a, b)=> {
                    const taskA = boardData.tasks[a];
                    const taskB = boardData.tasks[b];
                    return taskA.info.startTime - taskB.info.startTime
                }
            )
            break;
        case "START_LATEST":
            taskIds.sort((a, b)=> {
                    const taskA = boardData.tasks[a];
                    const taskB = boardData.tasks[b];
                    return taskB.info.startTime - taskA.info.startTime
                }
            )
            break;
        case "PRIORITY_FIRST":
            taskIds.sort((a, b)=> {
                    const taskA = boardData.tasks[a];
                    const taskB = boardData.tasks[b];
                    return taskA.info.priority - taskB.info.priority
                }
            )
            break;
        case "DUETIME_FIRST":
            taskIds.sort((a, b)=> {
                    const taskA = boardData.tasks[a];
                    const taskB = boardData.tasks[b];
                    return taskA.info.dueTime - taskB.info.dueTime
                }
            )
            break;
        case "CREATE_FIRST":
            taskIds.sort((a, b)=> {
                    const taskA = boardData.tasks[a];
                    const taskB = boardData.tasks[b];
                    return taskA.info.createTime - taskB.info.createTime
                }
            )
            break;
        case "CREATE_LATEST":
            taskIds.sort((a, b)=> {
                    const taskA = boardData.tasks[a];
                    const taskB = boardData.tasks[b];
                    return taskB.info.createTime - taskA.info.createTime
                }
            )
            break;
        case "UPDATE_FIRST":
            taskIds.sort((a, b)=> {
                    const taskA = boardData.tasks[a];
                    const taskB = boardData.tasks[b];
                    return taskA.info.updateTime - taskB.info.updateTime
                }
            )
            break;
        case "UPDATE_LATEST":
            taskIds.sort((a, b)=> {
                    const taskA = boardData.tasks[a];
                    const taskB = boardData.tasks[b];
                    return taskB.info.updateTime - taskA.info.updateTime
                }
            )
            break;
    }
}



