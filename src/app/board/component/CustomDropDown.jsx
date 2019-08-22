import React, {useState} from "react";
import Button from "@material-ui/core/Button/Button";
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";


const CustomDropDown = (props) => {


    const [anchorEl, setAnchorel] = useState(null);

    const handleClick = (event) => {
        setAnchorel(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorel(null)
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
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    Object.keys(props.overlay).map((key, index) => {
                        return <MenuItem onClick={() => handleChoose(key) } key={key}>{props.overlay[key]} {props.selected === key && <i className="iconfont icon-cc-yes-crude" style={{marginLeft: 10}}/>}</MenuItem>
                    })
                }
            </Menu>
        </div>
    )
}

export default CustomDropDown;
