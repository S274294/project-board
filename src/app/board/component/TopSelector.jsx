import React from 'react';
import DropDown from "./DropDown"

const TopSelector = (props) => {

    const orderList = {
        DEFAULT: "项目自定义排序", START_FIRST:"按开始时间最早",
        START_LATEST: "按开始时间最晚", PRIORITY_FIRST: "按照优先级最高",
        DUETIME_FIRST: "按截止时间最近", CREATE_FIRST: "按创建时间最早",
        CREATE_LATEST: "按创建时间最晚", UPDATE_FIRST: "按更新时间最早",
        UPDATE_LATEST:"按更新时间最晚"
    }

    return (
        <div className="topSelector">
            <div style={{marginLeft: 16}}>
            </div>
            <div className="flexContainer" style={{paddingRight: 16}}>
                <DropDown overlay={orderList} onChoose={props.handleChooseOrder} selected={props.order}/>
            </div>
        </div>
    )
}

export default TopSelector;
