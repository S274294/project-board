import React, { useCallback } from 'react';
import { TextField, DialogContent, DialogTitle, Icon, IconButton, Typography, Toolbar, AppBar, Avatar, InputAdornment, Tooltip, List } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as Action from "../../action/index.action";
import DialogContentText from '@material-ui/core/DialogContentText';


function TaskForm(props) {

    const dispatch = useDispatch();
    const taskData = useSelector(state => state.taskDialog.data);

    return (
        <>
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
            <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
            </DialogContent>
        </>
    )
}

export default TaskForm;