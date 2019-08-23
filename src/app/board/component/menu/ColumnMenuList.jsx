import React from "react";
import Divider from "@material-ui/core/Divider/Divider";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import MenuList from "@material-ui/core/MenuList/MenuList";
import MenuTopTab from "./MenuTopTab";

const ColumnMenuList = (props) => {


    return (
        <>
            <MenuTopTab handleCloseMenu={props.handleCloseMenu} title="列表菜单"/>
            <MenuList>
                <MenuItem onClick={() => props.switchMenuMode("editColumn")}><i className="iconfont icon-edit" style={{marginRight: 8}} />编辑列表</MenuItem>
                <MenuItem onClick={() => props.switchMenuMode("addColumn")}><i className="iconfont icon-iconfontadd" style={{marginRight: 8}}/>在此后添加新列表</MenuItem>
                <MenuItem onClick={() => props.switchMenuMode("clearTask")}><i className="iconfont icon-cc-trash" style={{marginRight: 8}}/>本列表所有任务移到回收站</MenuItem>
                <Divider light />
                <MenuItem onClick={() => props.switchMenuMode("deleteColumn")}><i className="iconfont icon-cc-trash" style={{marginRight: 8}}/>删除列表</MenuItem>
            </MenuList>
        </>

    )
}

export default ColumnMenuList;
