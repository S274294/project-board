import React, {useRef, useState, useEffect} from 'react';
import {TextField, Button}  from '@material-ui/core';
import AddLabel from "./AddLabel";
import AddUser from "./AddUser";

const AddTask = (props) => {

    const [taskTitle, setTaskTitle] = useState("");
    const [isTaskEmpty, setIsTaskEmpty] = useState(true);
    const ref = useRef(null);
    const [labelArray, setLabelArray] = useState([]);
    const [executor, setExecutor] = useState(null);

    const handleChange = (e) => {
        setTaskTitle(e.target.value);
        if(e.target.value !== null && e.target.value.trim() !== ""){
            setIsTaskEmpty(false);
        }else{
            setIsTaskEmpty(true);
        }
    }

    const handleKeyUp = (e) => {
        if(e.keyCode === 13 && !isTaskEmpty){
            props.createTask(props.columnId, taskTitle);
            setTaskTitle("");
            setIsTaskEmpty(true);
        }
    }

    const handleClick = (e) => {
        const task = {
            title: taskTitle,
            labels: labelArray,
            executor: executor
        }
        props.createTask(props.columnId, task);
        setTaskTitle("");
        setIsTaskEmpty(true);
    }

    useEffect(() => {
        // 1.绑定点击事件
        const root = document.getElementById("root");
        root.addEventListener("click", handleClickOutside);
        return () => {
            // 2.移除点击事件
            root.removeEventListener("click", handleClickOutside);
        };
    })

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target) && isTaskEmpty) {
            props.handleCloseAddTask();
        }
    }

    const handleLabelArrayChange = (labelArray) => {
        setLabelArray(labelArray)
    }

    const handleExecutorChange = (executor) => {
        setExecutor(executor);
    }


    return (
            props.addTask.isOpen && props.columnId === props.addTask.columnId ?
                <div style={{padding: 16, borderTop: "1px solid #D7D7D7"}} ref={ref}>
                    {/* 输入任务标题 */}
                    <TextField
                        id="outlined-name"
                        label="任务标题"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        value={taskTitle}
                        onChange={handleChange}
                        onKeyUp={handleKeyUp}
                    />
                    <AddUser onChange={handleExecutorChange}/>
                    <AddLabel onChange={handleLabelArrayChange} />
                    <div>
                        <Button variant="contained" color="primary" disabled={isTaskEmpty} onClick={handleClick}>创建</Button>
                    </div>
                </div>

                :
                <div style={{borderTop: "1px solid #D7D7D7", display: "flex", alignItems: "center", padding: 10, cursor: "pointer"}} onClick={() => props.handleAddTaskClick(props.columnId)}>
                    <i className="iconfont icon-iconfontadd" style={{marginRight: 5}}></i>新建任务
                </div>

    )
}
export default AddTask;
