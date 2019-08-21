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

    function handleTaskDialogClick(ev, taskData)
    {
        ev.preventDefault();
        dispatch(Action.openTaskDialog(taskData));
    }

    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {
                (provided) => (
                    <div className="task" ref={provided.innerRef} {...provided.draggableProps}
                         {...provided.dragHandleProps} onClick={(ev) => handleTaskDialogClick(ev, props.task)} >
                        {props.task.info.cover &&
                            <img style={{width: 274, height: 205}} src={props.task.info.cover}/>
                        }
                        {props.task.info.labels &&
                        <div className="flexContainer">
                            {props.task.info.labels.map(label =>
                                <Tooltip title={label.name} key={label.id}>
                                    <span  style={{...tagStyle, backgroundColor: label.color, display: "block"}}></span>
                                </Tooltip>
                            )}
                        </div>
                        }

                        <p style={{margin: "0 0 10px 0"}}>
                            {
                                props.task.info.title
                            }
                        </p>
                        <div className="flexContainer" style={{marginBottom: 16}}>
                            {
                                props.task.info.dueTime &&
                                <div style={{backgroundColor: "#F44336", color: "white", padding: 5, borderRadius: 5, marginRight: 8}}>{moment(props.task.info.dueTime).format("YYYY-MM-DD")}</div>
                            }
                            {
                                props.task.info.checkList &&
                                <div  style={{backgroundColor: "#616161", color: "white", padding: 5, borderRadius: 5}}>
                                    {props.task.info.checkList.progress + "/" + props.task.info.checkList.total.length}</div>
                            }
                        </div>
                        <div className="flexContainer" style={{marginBottom: 8}}>
                            {
                                props.task.info.members &&
                                props.task.info.members.map(member => <Avatar key={member.username} src={member.avatar} style={{marginRight: 8}}/>)
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
                )
            }
        </Draggable>
    )
}

export default Task;
