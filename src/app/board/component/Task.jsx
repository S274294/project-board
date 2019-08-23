import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import {Avatar,Tooltip, Divider}  from '@material-ui/core';
import moment from "moment";
import {useDispatch} from 'react-redux';
import * as Action from "../action/index.action";
import {Face} from "@material-ui/icons"

/** 标签样式 **/
const tagStyle = {margin: "16px 8px 16px 0", width: 32, height: 6, borderRadius: 3}
const shadow = {boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"}


function Task (props) {

    const dispatch = useDispatch();

    const handleTaskDialogClick = (ev, taskData) =>
    {
        ev.preventDefault();
        dispatch(Action.openTaskDialog(taskData));
    }

    const handleToggleTask = (e, taskId) => {
        e.stopPropagation()
        dispatch(Action.toggleTask(taskId));
    }
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {
                (provided) => (
                    <div className="task" ref={provided.innerRef} {...provided.draggableProps}
                         {...provided.dragHandleProps} onClick={(ev) => handleTaskDialogClick(ev, props.task)}>
                        <div style={props.task.finish ? {opacity: 0.5} : {opacity: 1}}>
                            <div className="flexContainer">
                                <div className="checkbox" onClick={(e) => handleToggleTask(e, props.task.id)}>
                                    {
                                        props.task.finish && <i className="iconfont icon-cc-yes-crude"/>
                                    }
                                </div>
                                <p style={{margin: "0 0 10px 0"}}>
                                    {
                                        props.task.title
                                    }
                                </p>
                            </div>

                            {props.task.cover &&
                            <img style={{width: 274, height: 205}} src={props.task.cover}/>
                            }
                            {props.task.labels &&
                            <div className="flexContainer">
                                {props.task.labels.map(label =>
                                    <Tooltip title={label.name} key={label.id}>
                                        <span className="tag">
                                            <span style={{borderRadius: "50%", width: 10, height: 10, backgroundColor: label.color, marginRight: 3}}></span>
                                            {label.name}
                                        </span>
                                    </Tooltip>
                                )}
                            </div>
                            }
                            <div className="flexContainer" style={{marginBottom: 16}}>
                                {
                                    props.task.dueTime &&
                                    <div style={{backgroundColor: "#F44336", color: "white", padding: 5, borderRadius: 5, marginRight: 8}}>{moment(props.task.dueTime).format("YYYY-MM-DD")}</div>
                                }
                                {
                                    props.task.checkList &&
                                    <div  style={{backgroundColor: "#616161", color: "white", padding: 5, borderRadius: 5}}>
                                        {3 + "/" + props.task.checkList.length}</div>
                                }
                            </div>
                            <div className="flexContainer" style={{marginBottom: 8}}>
                                {
                                    props.task.members &&
                                    props.task.members.map(member => <Avatar key={member.username} src={member.avatar} style={{marginRight: 8}}/>)
                                }
                            </div>
                            <Divider />
                            <div className="flexContainer" style={{justifyContent: "space-between", padding: "8px 0"}}>
                                <span>
                                   <i className="iconfont icon-eye"></i>
                                </span>
                                <div>
                                    <span> <i className="iconfont icon-attachment" style={{marginRight: 5}}/>2</span>
                                    <span> <i className="iconfont icon-chat" style={{marginRight: 5}}/>3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </Draggable>
    )
}

export default Task;
