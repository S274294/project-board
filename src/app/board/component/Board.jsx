import React, {useEffect} from 'react';
import ColumnListContainer from "../container/ColumnListCotainer";
import TopSelectorContainer from "../container/TopSelectorContainer";

const Board = (props) => {


    useEffect(() => {
        props.requestBoard();
    }, [])
    return (
        <div>
            <TopSelectorContainer/>
            <ColumnListContainer/>
        </div>
    )
}

export default Board;
