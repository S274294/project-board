import {Button, MenuItem, Menu}  from '@material-ui/core';
import React, {useState} from "react";

const DropDown = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleChoose = (order) => {
        props.onChoose && props.onChoose(order);
        handleClose();
    }


    return(
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {props.overlay[props.selected]} <i className="iconfont icon-arrowdown" style={{marginLeft: 5}}/>
            </Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    Object.keys(props.overlay).map((key, index) => {
                        return <MenuItem onClick={() => handleChoose(key) } key={key}>{props.overlay[key]} {props.selected == key && <i className="iconfont icon-yes" style={{marginLeft: 10}}/>}</MenuItem>
                    })
                }

            </Menu>
        </div>
    )
}

export default DropDown;
