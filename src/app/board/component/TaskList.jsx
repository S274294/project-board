import React from 'react';
import Task from "./Task";
import {Droppable} from "react-beautiful-dnd";

const TaskList = (props) => {

    return (
        <Droppable droppableId={props.columnId} type="task">
            {
                (provided) => (
                    <div className="taskList" ref={provided.innerRef} {...provided.draggableProps}>
                        {
                            props.boardData.columns[props.columnId].taskIds.map((taskId,index) => {
                                const task = props.boardData.tasks[taskId];
                                return <Task task={task} key={task.id} index={index}/>
                            })

                        }
                        {provided.placeholder}
                    </div>

                )
            }
        </Droppable>
    )
}

export default TaskList;
