import React from 'react';
import SortContainer from "../container/SortContainer";

const TopSelector = (props) => {

    return (
        <div className="topSelector">
            <div style={{marginLeft: 16}}>
            </div>
            <div className="flexContainer" style={{paddingRight: 16}}>
                <SortContainer/>
            </div>
        </div>
    )
}

export default TopSelector;
