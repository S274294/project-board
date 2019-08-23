import React, {useState} from 'react';
import Popover from "@material-ui/core/Popover/Popover";
import UpdateColumn from "./UpdateColumn";
import ColumnMenuList from "./ColumnMenuList";
import ClearTask from "./ClearTask";


const ColumnMenu = (props) => {

    const [menu, setMenu] = useState(null);
    const [menuMode, setMenuMode] = useState("menuList");

    const handleMenuIconClick = (e) => {
        setMenuMode("menuList");
        setMenu(e.currentTarget);
    }

    const handleCloseMenu = () => {
        setMenu(null);
    }

    const switchMenuMode = (mode) => {
        setMenuMode(mode);
    }

    const handleUpdateTitle = (title) => {
        props.handleUpdateTitle(title);
        handleCloseMenu();
    }

    const handleAddColumn = (title) => {
        props.handleAddColumn(title);
        handleCloseMenu();
    }

    const handleClearTask = () => {
        props.handleClearTask();
        handleCloseMenu();
    }

    const handleDeleteColumn = () => {
        props.handleDeleteColumn();
        handleCloseMenu();
    }

    return (
        <>
            <div className="hoverIndicator" onClick={(e) => handleMenuIconClick(e)}><i className="iconfont icon-More"/></div>
            <Popover
                id="userPicker"
                open={Boolean(menu)}
                anchorEl={menu}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div style={{width: 252}}>
                    {
                        (() => {
                            switch (menuMode) {
                                case "menuList": return <ColumnMenuList handleCloseMenu={handleCloseMenu} switchMenuMode={switchMenuMode}/>
                                case "editColumn":
                                    return <UpdateColumn handleCloseMenu={handleCloseMenu} handleBackMenu={() => switchMenuMode("menuList")} columnTitle={props.columnTitle} handleClick={(title) => handleUpdateTitle(title)} tabTitle={"编辑列表"} btnName="保存"/>;
                                case "addColumn":
                                    return <UpdateColumn handleCloseMenu={handleCloseMenu} handleBackMenu={() => switchMenuMode("menuList")} handleClick={(title) => handleAddColumn(title)} tabTitle="添加列表" btnName="创建"/>;
                                case "clearTask":
                                    return <ClearTask handleCloseMenu={handleCloseMenu} handleBackMenu={() => switchMenuMode("menuList")} handleClick={handleClearTask} tabTitle="清空任务列表" btnName="清空任务列表">
                                        您确定要把列表下的所有任务清除吗？
                                    </ClearTask>;
                                case "deleteColumn":
                                    return <ClearTask handleCloseMenu={handleCloseMenu} handleBackMenu={() => switchMenuMode("menuList")} handleClick={handleDeleteColumn} tabTitle="删除列表" btnName="确定" authValue={props.columnTitle}>
                                        删除列表将彻底清空此列表上的所有任务，请确认是否要删除整个列表？
                                    </ClearTask>;
                                default:
                                    return <ColumnMenuList handleCloseMenu={handleCloseMenu} switchMenuMode={switchMenuMode}/>;
                            }
                        })()

                    }
                </div>
            </Popover>
        </>
    )
}

export default ColumnMenu;
