import * as Action from "../action/index.action"

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
        case Action.ADD_LABEL:
        {
            return {
                ...state,
                globalLabels: [
                    ...state.globalLabels,
                    action.payload
                ]
            };
        }
        default: return state;
    }
}

export default boardReducer;
