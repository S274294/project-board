import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import TaskListContainer from "../container/TaskListCotainer";
import AddTaskContainer from "../container/AddTaskContainer";
import ColumnMenuContainer from "../container/ColumnMenuContainer";

const Column = (props) => {

    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            {
                (provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps}>
                        <div className="column">
                            <div className="columnTitle" {...provided.dragHandleProps}>
                                {
                                    props.column.title
                                }
                                <ColumnMenuContainer columnId={props.column.id} title={props.column.title}/>
                            </div>
                            <TaskListContainer columnId={props.column.id}/>
                            <AddTaskContainer columnId={props.column.id}/>
                            </div>
                    </div>
                )
            }
        </Draggable>
    )
}

export default Column;
