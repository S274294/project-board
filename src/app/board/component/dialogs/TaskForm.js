import 'date-fns';
import React, { useState, useCallback } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { TextField, DialogContent, DialogTitle, IconButton, Typography, Toolbar, AppBar, Avatar, InputAdornment, Tooltip, List } from '@material-ui/core';
import _ from '@lodash';
import { useForm, useDebounce, useUpdateEffect } from '@fuse/hooks';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import * as Action from "../../action/index.action";
import DialogContentText from '@material-ui/core/DialogContentText';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

function TaskForm(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const taskData = useSelector(state => state.taskDialog.data);
    const { form: taskForm, handleChange, setForm, setInForm } = useForm(taskData);
    
    
    
    
    
    
    
    return (
        <>
            <DialogTitle id="form-dialog-title">
                <IconButton onClick={ev => dispatch(Action.closeTaskDialog())} className={classes.button} aria-label="close">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>

                {taskForm.info && (

                    <div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="yyyy-MM-dd"
                                margin="normal"
                                id="date-picker-startDate"
                                label="Start Date"
                                value={taskForm.startTime}
                                onChange={handleChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'start date',
                                }}
                            />
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="yyyy-MM-dd"
                                margin="normal"
                                id="date-picker-dueDate"
                                label="Due Date"
                                value={taskForm.dueTime}
                                onChange={handleChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'due date',
                                }}
                            />
                        </MuiPickersUtilsProvider>

                        <TextField
                            label="Title"
                            name="title"
                            value={taskForm.title}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            label="Description"
                            name="description"
                            multiline
                            rows="4"
                            value={taskForm.description}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                )}
            </DialogContent>
        </>
    )
}

export default TaskForm;