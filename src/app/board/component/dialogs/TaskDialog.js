import React from 'react';
import { Dialog } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as Action from "../../action/index.action";
import TaskForm from './TaskForm';


function TaskDialog(props) {

    const dispatch = useDispatch();
    const taskDialogOpen = useSelector(state => state.taskDialog.dialogOpen);
    return (
        <Dialog
            open={taskDialogOpen}
            onClose={ev => dispatch(Action.closeTaskDialog())}
           
        >
          <TaskForm />   
        </Dialog>
    );
}

export default TaskDialog;
