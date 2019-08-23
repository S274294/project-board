import * as Action from "../action/index.action"

const initialState = {
    dialogOpen: false,
    data      : null
}

const taskDialogReducer = function (state = initialState, action) {

    switch ( action.type )
    {
        case Action.OPEN_TASK_DIALOG:
        {
            return {
                dialogOpen: true,
                data      : action.payload
            };
        }
        case Action.CLOSE_TASK_DIALOG:
        {
            return initialState;
        }
        case Action.UPDATE_TASK:
        {
            return {
                ...state,
                data: action.payload
            }
        }
        default:
            return state;
    }
}


export default taskDialogReducer;