import React, { useState, useCallback } from 'react';
import moment from "moment";
import { TextField, Menu, MenuItem, LinearProgress, List, ListItemText, ListItemIcon, DialogContent, DialogTitle, IconButton, Typography, Toolbar, AppBar, Avatar, InputAdornment, Tooltip } from '@material-ui/core';
import _ from '@lodash';
import { FuseChipSelect } from '@fuse';
import { useForm, useDebounce, useUpdateEffect } from '@fuse/hooks';
import CloseIcon from '@material-ui/icons/Close';
import TodayIcon from '@material-ui/icons/Today';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CommentIcon from '@material-ui/icons/Comment';
import ListIcon from '@material-ui/icons/List';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import * as Action from "../../action/index.action";
import TaskName from "./TaskName";
import TaskCheckListItem from './checklist/TaskChecklistItem';
import TaskAddCheckListItem from './checklist/TaskAddCheckListItem';
import LabelModel from '../../model/LabelModel';
import TaskActivity from './activity/TaskActivity';
import TaskAddComment from './comment/TaskAddComment';



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
    const [anchorEl, setAnchorEl] = useState(null);
    const taskData = useSelector(state => state.taskDialog.data);
    const boardData = useSelector(state => state.boardData);
    const { form: taskForm, handleChange, handleDateChange, setForm, setInForm } = useForm(taskData);
    const dueDate = taskForm && taskForm.dueTime ? moment(taskForm.dueTime).format("YYYY-MM-DD") : "";
    const startDate = taskForm && taskForm.startTime ? moment(taskForm.startTime).format("YYYY-MM-DD") : "";
    
    
    
    const updateTask = useDebounce((newTask) => {
        dispatch(Action.updateTask({ ...newTask }));
    }, 0);

    useUpdateEffect(() => {
        updateTask(taskForm);
    }, [dispatch, taskForm, updateTask]);

    function handleTitleChange(title) {
        setInForm("title", title);
    }
    //更新成员函数
    function memberChipChange(name, value) {
        if (value === null) {
            value = [];
        }
        setInForm(name, value.map(member => {
            return member && {
                id: member.value,
                username: member.username,
                avatar: member.avatar
            }
        }));
    }
    //标签更新函数
    function chipChange(name, value) {

        if (value === null) {
            value = [];
        }
        setInForm(name, value.map(label => {
            return label && {
                id: label.value,
                name: label.label,
                color: label.color
            }
        }));
    
    }

    function addNewChip(name, value) {
        setInForm(name, [...taskForm.labels, value])
    }

    //Checklist 相关处理函数
    function handleMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose() {
        setAnchorEl(null);
    }
    function checkItemsChecked() {
        return _.sum(taskForm.checkList.map(x => (x.checked ? 1 : 0)));
    }

    const handleListItemChange = useCallback((item, index) => {
        setInForm(`checkList[${index}]`, item);
    }, [setInForm]);

    function handleListItemRemove(id) {
        setInForm('checkList', _.reject(taskForm.checkList, { id }))
    }

    function handleListItemAdd(item) {
        setInForm('checkList', [...taskForm.checkList, item])
    }

    function HandleCheckListRemove() {
        setInForm('checkList', [])
    }

    //添加评论
    function commentAdd(comment)
    {
        return setInForm('activities', [comment, ...taskForm.activities])
    }
    return (
        <>
            <DialogTitle id="form-dialog-title">
                <IconButton onClick={ev => dispatch(Action.closeTaskDialog())} className={classes.button} aria-label="close">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {/* Task Name */}
                <TaskName title={taskForm.title} onTitleChange={handleTitleChange} />
                {/* Comment Component */}
                <div className="mb-24">
                    <div className="flex items-center mt-16 mb-12">
                        <CommentIcon className="text-20 mr-8" color="action"/>
                        <Typography className="text-12">Comment</Typography>
                    </div>
                    <div>
                        <TaskAddComment
                            onCommentAdd={commentAdd}
                        />
                    </div>
                </div>
                {taskForm.activities.length > 0 && (
                    <div className="mb-24">
                        <div className="flex items-center mt-16">
                            <ListIcon className="text-20 mr-8" color="action" /> 
                            <Typography className="text-12">Activity</Typography>
                        </div>
                        <List className="">
                            {taskForm.activities.map(item => (
                                    <TaskActivity
                                        item={item}
                                        key={item.id}
                                    />
                                )
                            )}
                        </List>
                    </div>
                )}
                {/* CheckList Component */}
                <div>
                    <div className="mb-24">
                        <div className="flex items-center justify-between mt-16 mb-12">
                            <div className="flex items-center">
                                <Typography>CheckList</Typography>
                            </div>
                            <div className="">
                                <IconButton
                                    aria-owns={anchorEl ? 'actions-menu' : null}
                                    aria-haspopup="true"
                                    onClick={handleMenuOpen}
                                    variant="outlined"
                                    size="small"
                                >
                                    <MoreVertIcon className="text-20" />
                                </IconButton>
                                <Menu
                                    id="actions-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem onClick={HandleCheckListRemove}>
                                        <ListItemIcon className="min-w-40">
                                            <DeleteOutlineIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Remove all List" />
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center pl-16">
                                <Typography className="flex font-600 mr-12">
                                    {checkItemsChecked() + ' / ' + taskForm.checkList.length}
                                </Typography>
                                <LinearProgress
                                    className="flex flex-1"
                                    variant="determinate"
                                    color="secondary"
                                    value={100 * checkItemsChecked() / taskForm.checkList.length}
                                />
                            </div>
                            <List className="">
                                {taskForm.checkList.map((item, index) => (
                                    <TaskCheckListItem
                                        name="checkList"
                                        item={item}
                                        key={item.id}
                                        index={index}
                                        onListItemChange={handleListItemChange}
                                        onListItemRemove={() => handleListItemRemove(item.id)}
                                    />
                                ))}
                                <TaskAddCheckListItem
                                    onListItemAdd={(item) => handleListItemAdd(item)}
                                />
                            </List>
                        </div>
                    </div>
                    <TextField
                        label="Due date"
                        type="date"
                        name="startTime"
                        value={startDate}
                        onChange={handleDateChange}
                        placeholder=" Choose a due date"
                        className="w-full sm:w-auto"
                        InputLabelProps={{
                            shrink: true
                        }}
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <TodayIcon color="action" />
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        label="Due date"
                        type="date"
                        name="dueTime"
                        value={dueDate}
                        onChange={handleDateChange}
                        placeholder=" Choose a due date"
                        className="w-full sm:w-auto"
                        InputLabelProps={{
                            shrink: true
                        }}
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <TodayIcon color="action" />
                                </InputAdornment>
                            )
                        }}
                    />
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
                    <FuseChipSelect
                        value={
                            taskForm.labels.map(label => {

                                return label && {
                                    value: label.id,
                                    label: label.name,
                                    color: label.color
                                }
                            })
                        }
                        onChange={(value) => chipChange('labels', value)}
                        placeholder="Select multiple Labels"
                        isMulti
                        textFieldProps={{
                            variant: "outlined"
                        }}
                        options={boardData.globalLabels.map(label => (
                            {
                                value: label.id,
                                label: label.name,
                                color: label.color
                            }
                        ))}

                        onCreateOption={(name) => {
                            // Create New Label
                            const newLabel = new LabelModel({ name });

                            // Ad new Label to board(redux store and server)
                            dispatch(Action.addLabel(newLabel));

                            // Trigger handle chip change
                            addNewChip('labels', newLabel);

                            return newLabel.id;
                        }}
                    />
                    <FuseChipSelect
                        value={
                            taskForm.members.map(member => {

                                return member && {
                                    value: member.id,
                                    label: (<Tooltip title={member.username}><Avatar className="-ml-12 w-32 h-32" src={member.avatar} /></Tooltip>),
                                    username: member.username,
                                    avatar: member.avatar
                                }
                            })
                        }
                        onChange={(value) => memberChipChange('members', value)}
                        placeholder="Select multiple Members"
                        isMulti
                        textFieldProps={{
                            variant: "outlined"
                        }}
                        options={boardData.globalMembers.map(member => (
                            {
                                value: member.id,
                                label: (<span className="flex items-center"><Avatar className="w-32 h-32 mr-8" src={member.avatar} />{member.username}</span>),
                                username: member.username,
                                avatar: member.avatar

                            }
                        ))}

                        variant="fixed"
                    />

                </div>
            </DialogContent>
        </>
    )
}

export default TaskForm;