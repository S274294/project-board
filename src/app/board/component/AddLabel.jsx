import React, {useState} from "react";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Input from "@material-ui/core/Input/Input";
import Menu from "@material-ui/core/Menu/Menu";
import Button from "@material-ui/core/Button/Button";


/** 标签颜色数组 **/
const labelColors = [
    "#3DA8F5",
    "#75C940",
    "#2FBDB3",
    "#797EC9",
    "#FFAF38",
    "#FF4F3E"
]

const AddLabel = () => {

    const [menu, setMenu] = useState(null);


    const handleClick = (event) => {
        setMenu(event.currentTarget);
    }

    const handleChange = (e) => {
        console.log(e.target.value);
    }
    const handleClose = (e) => {
        setMenu(null)
    }

    return (
        <div className="flexContainer" style={{padding: 8}}>
            <div style={{flex: 2, display: "flex", justifyContent: "center", alignItems: "center"}}><i className="iconfont icon-label"/></div>
            <div style={{flex: 8}}><span style={{cursor: "pointer"}} onClick={handleClick}>添加标签</span></div>
            <Menu
                id="simple-menu"
                anchorEl={menu}
                keepMounted
                open={Boolean(menu)}
                onClose={handleClose}

            >
                <Input
                    id="outlined-name"
                    label="Name"
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    style={{margin: 8}}
                />

                    <div className="flexContainer" style={{justifyContent: "space-around", margin: "20px 0px"}}>
                        {
                            labelColors.map(color =>
                                <div style={{height: 24, width: 24, backgroundColor: color, cursor: "pointer", borderRadius: "50%"}} className="flexCenter"></div>
                            )
                        }
                    </div>
                <div className="flexCenter" style={{padding: 8}}>
                    <Button variant="contained" color="primary" size="large" fullWidth={true}>
                        添加
                    </Button>
                </div>
            </Menu>
        </div>
    )
}

export default AddLabel;
