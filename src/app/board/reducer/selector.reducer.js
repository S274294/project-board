import * as Action from "../action/index.action"

const initState = {
    order: "DEFAULT"
}

const addTaskReducer = (state = initState, action) => {
    switch (action.type) {
        case Action.SELECTOR_TASK_ORDER:
            return {
                ...state,
                order: action.order
            };
        default: return state;
    }
}

export default addTaskReducer;
