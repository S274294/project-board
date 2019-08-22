
export const SELECTOR_TASK_ORDER = "SELECTOR_TASK_ORDER";

export const taskOrder = (order) => {
    return {
        type: SELECTOR_TASK_ORDER,
        order: order
    }
}
export const reorderBoardData = (boardData, order) => {
    const columnOrder = boardData.columnOrder;
    const newColumns = boardData.columns;
    columnOrder.map(columnId => {
        const column = boardData.columns[columnId];
        const taskIds =Array.from(column.taskIds);
        taskIdsFilter(taskIds, order, boardData);
        taskIds.sort((a, b) => {
            const taskA = boardData.tasks[a];
            const taskB = boardData.tasks[b];
            return taskA.finish - taskB.finish
        })

        return newColumns[columnId] = {
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
        case "DEFAULT":
            return;
        case "START_FIRST":
            taskIds.sort((a, b)=> {
                    const taskA = boardData.tasks[a];
                    const taskB = boardData.tasks[b];
                    return taskA.startTime - taskB.startTime
                }
            )
            break;
        case "START_LATEST":
            taskIds.sort((a, b)=> {
                    const taskA = boardData.tasks[a];
                    const taskB = boardData.tasks[b];
                    return taskB.startTime - taskA.startTime
                }
            )
            break;
        case "PRIORITY_FIRST":
            taskIds.sort((a, b)=> {
                    const taskA = boardData.tasks[a];
                    const taskB = boardData.tasks[b];
                    return taskA.priority - taskB.priority
                }
            )
            break;
        case "DUETIME_FIRST":
            taskIds.sort((a, b)=> {
                    const taskA = boardData.tasks[a];
                    const taskB = boardData.tasks[b];
                    return taskA.dueTime - taskB.dueTime
                }
            )
            break;
        case "CREATE_FIRST":
            taskIds.sort((a, b)=> {
                    const taskA = boardData.tasks[a];
                    const taskB = boardData.tasks[b];
                    return taskA.createTime - taskB.createTime
                }
            )
            break;
        case "CREATE_LATEST":
            taskIds.sort((a, b)=> {
                    const taskA = boardData.tasks[a];
                    const taskB = boardData.tasks[b];
                    return taskB.createTime - taskA.createTime
                }
            )
            break;
        case "UPDATE_FIRST":
            taskIds.sort((a, b)=> {
                    const taskA = boardData.tasks[a];
                    const taskB = boardData.tasks[b];
                    return taskA.updateTime - taskB.updateTime
                }
            )
            break;
        case "UPDATE_LATEST":
            taskIds.sort((a, b)=> {
                    const taskA = boardData.tasks[a];
                    const taskB = boardData.tasks[b];
                    return taskB.updateTime - taskA.updateTime
                }
            )
            break;
        default: return;
    }
}



