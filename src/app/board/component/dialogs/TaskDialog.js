import React from 'react';
import { Dialog } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import * as Action from "../../action/index.action";
import TaskForm from './TaskForm';


const useStyles = makeStyles({
    paper: {
        color: 'white'
    }
})


function TaskDialog(props) {

    const dispatch = useDispatch();
    const taskDialogOpen = useSelector(state => state.taskDialog.dialogOpen);
    const classes = useStyles(props);

    function handleClose(ev) {
        ev.preventDefault();
        dispatch(Action.closeTaskDialog());
    }

    return (
        <Dialog
            open={taskDialogOpen}
            onClose={ev => dispatch(Action.closeTaskDialog())}
            classes={{
                paper: clsx(classes.paper)
            }}
        >
          <TaskForm />   
        </Dialog>
    );
}

export default TaskDialog;
