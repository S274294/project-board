import * as Action from "../action/index.action"

const initState = {
    addTask: {
        isOpen: false,
        columnId: null
    }
}

const addTaskReducer = (state = initState, action) => {
    switch (action.type) {
        case Action.OPEN_ADD_TASK:
            return {
                ...state,
                addTask: {
                    isOpen: true,
                    columnId: action.columnId
                }
            };
        case Action.CLOSE_ADD_TASK:
            return {
                ...state,
                addTask: {
                    isOpen: false,
                    columnId: null
                }
            }
        default: return state;
    }
}

export default addTaskReducer;
