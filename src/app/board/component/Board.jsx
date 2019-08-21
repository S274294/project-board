import React, {useEffect} from 'react';
import ColumnListContainer from "../container/ColumnListCotainer";
import TopSelectorContainer from "../container/TopSelectorContainer";
import TaskDialog from "./dialogs/TaskDialog";

const Board = (props) => {


    useEffect(() => {
        props.requestBoard();
    }, [])
    return (
        <div>
            <TopSelectorContainer/>
            <ColumnListContainer/>
            <TaskDialog />
        </div>
    )
}

export default Board;
