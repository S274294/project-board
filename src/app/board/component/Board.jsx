import React, {useEffect} from 'react';
import ColumnListContainer from "../container/ColumnListCotainer";
import TopSelectorContainer from "../container/TopSelectorContainer";
import TaskDialog from "./dialogs/TaskDialog";
import {useDispatch} from 'react-redux';
import {useState} from "react";
import * as Action from "../action/index.action";
const Board = (props) => {

    const dispatch = useDispatch();
    const [counter] = useState(0);

    useEffect(() => {
        dispatch(Action.requestBoard());
    }, [counter])
    return (
        <div>
            <TopSelectorContainer/>
            <ColumnListContainer/>
            <TaskDialog />
        </div>
    )
}

export default Board;
