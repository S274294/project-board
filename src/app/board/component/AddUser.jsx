
import React, {useState, useEffect} from "react";
import Menu from "@material-ui/core/Menu/Menu";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";
import Popover from "@material-ui/core/Popover/Popover";
import TextField from "@material-ui/core/TextField/TextField";
import Avatar from "@material-ui/core/Avatar/Avatar";
import userData from "../../../fakedata/user-data";

const AddUser = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [userList, setUserList] = useState([]);
    const [executor, setExecutor] = useState({id: new Date().getTime(), username: "待认领", avatar: null, default: true});

    useEffect( () => {
        // 1.获取用户数据
        const userArray = Array.from(userData);
        userArray.unshift(executor);
        setUserList(userArray);
    }, [])

    const handleClick = (event)=> {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = ()=> {
        setAnchorEl(null);
    }

    const handleChooseExecutor = (user) => {
        setExecutor(user)
        props.onChange(user);
        handleClose();
    }

    const handleDeleteExecutor = (e) => {
        e.stopPropagation();
        setExecutor(userList[0]);
        props.onChange(null);
    }



    return (
        <div>
            <div className="flexContainer hoverIndicator" style={{cursor: "pointer", padding: 8}} onClick={handleClick} >
                {
                        <div style={{flex: 2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Avatar alt={executor.username} src={executor.avatar} style={{width: 24, height: 24}}>{executor.username.substr(0, 1).toLocaleUpperCase()}</Avatar>
                        </div>
                }

                <div style={{flex: 8, flexWrap: "wrap", alignItems: "center"}} className="flexContainer">
                    <span aria-describedby="userPicker">
                        {executor.username}
                    </span>
                    {
                        executor !== userList[0] && <i className="iconfont icon-baseline-close-px labelCloseIconContainer" id="labelDeleteExecutor" style={{marginLeft: 10}} onClick={(e) => handleDeleteExecutor(e)}></i>
                    }

                </div>
            </div>
            <Popover
                id="userPicker"
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div style={{padding: "0 20px"}}>
                    <TextField
                        id="outlined-name"
                        size="small"
                        label="Name"
                        margin="normal"
                        variant="outlined"
                    />
                    <div>
                        <div style={{padding: "6px 0", fontSize: 15, color: "#a6a6a6", cursor: "auto" }}>执行者</div>
                        <div className="userContainer">
                            <div className="flexContainer"  style={{alignItems: "center"}}>
                                <Avatar alt={executor.username} src={executor.avatar} >{executor.username.substr(0, 1).toLocaleUpperCase()}</Avatar>
                                <span style={{marginLeft: 20}}>{executor.username}</span>
                            </div>
                            <div><i className="iconfont icon-cc-yes-crude"/></div>
                        </div>
                        <div style={{padding: "6px 0", fontSize: 15, color: "#a6a6a6", cursor: "auto" }}>推荐</div>
                        {
                            userList.map(user =>
                            {
                                if(user.id !== executor.id){
                                    return (<div className="userContainer" key={user.id} onClick={() => handleChooseExecutor(user)}>
                                        <div className="flexContainer"  style={{alignItems: "center"}}>
                                            <Avatar alt={user.username} src={user.avatar}>{!user.avatar && user.username.substr(0, 1).toLocaleUpperCase()}</Avatar>
                                            <span style={{marginLeft: 20}}>{user.username}</span>
                                        </div>
                                    </div>)
                                }
                            })
                        }
                    </div>
                </div>


            </Popover>
        </div>
    )
}

export default AddUser;
