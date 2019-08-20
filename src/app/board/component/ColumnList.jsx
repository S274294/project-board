import React from 'react';
import Column from "./Column";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import AddColumnContainer from "../container/AddColumnContainer";

const ColumnList = (props) => {

    return (
        <DragDropContext  onDragEnd={props.onDragEnd}>
            <Droppable droppableId="dragDropContainer" type="column" direction="horizontal">
                {
                    (provided) => (
                        <div className="flexContainer" ref={provided.innerRef} {...provided.droppableProps}
                        style={{width: "fit-content", marginTop: 40}}>
                            {
                                props.boardData.columnOrder.map((columnId, index) => {
                                    const column = props.boardData.columns[columnId];
                                    return <Column column={column} key={columnId} index={index}/>
                                })
                            }
                            {provided.placeholder}
                            <AddColumnContainer label="输入列表标题">
                                新建任务列表
                            </AddColumnContainer>
                        </div>
                    )
                }
            </Droppable>
        </DragDropContext>
    )
}
export default ColumnList;
