import React, {useState} from "react";
import Input from "@material-ui/core/Input/Input";
import Menu from "@material-ui/core/Menu/Menu";
import Button from "@material-ui/core/Button/Button";
import Popover from "@material-ui/core/Popover/Popover";
import {Tooltip} from "@material-ui/core";


/** 标签颜色数组 **/
const labelColors = [
    "#3DA8F5",
    "#75C940",
    "#2FBDB3",
    "#797EC9",
    "#FFAF38",
    "#FF4F3E"
]

const AddLabel = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedColor, setSelectedColor] = useState(0);
    const [labelName, setLabelName] = useState("");
    const [labelArray, setLabelArray] = useState([]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleChange = (e) => {
        setLabelName(e.target.value);
    }
    const handleClose = () => {
        setAnchorEl(null);
        setLabelName("");
        setSelectedColor(0);
    }

    const handleSelectColor = (colorIndex) => {
        setSelectedColor(colorIndex);
    }

    const handleAddLabel = () => {
        const newLabelArray = [...labelArray, {id: new Date().getTime() ,name: labelName, color: labelColors[selectedColor]}];
        setLabelArray(newLabelArray);
        props.onChange && props.onChange(newLabelArray);
        handleClose();
    }

    const handleDeleteLabel = (labelId) => {
        const newLabelArray = labelArray.filter((label) => label.id !== labelId);
        setLabelArray(newLabelArray);
        props.onChange && props.onChange(newLabelArray);
    }


    return (
        <div className="flexContainer hoverIndicator" style={{padding: 8}}>
            <div style={{flex: 2, display: "flex", justifyContent: "center", alignItems: "center"}}><i className="iconfont icon-label"/></div>
            <div style={{flex: 8, flexWrap: "wrap"}} className="flexContainer">
                {
                    labelArray.map(label =>
                        <Tooltip title={label.name} key={label.id}>
                            <div className="label" style={{backgroundColor: label.color}} key={label.id}>
                                <div className="labelContentContainer">{label.name}</div>
                                <div className="labelCloseIconContainer" id="closeIconContainer" onClick={() =>handleDeleteLabel(label.id)}>
                                    <i className="iconfont icon-baseline-close-px" style={{marginLeft: 4}}></i>
                                </div>
                            </div>
                        </Tooltip>)
                }
                <span style={{cursor: "pointer"}} onClick={handleClick}>
                    {
                        labelArray.length > 0 ? <i className="iconfont icon-iconfontadd" style={{lineHeight: "32px"}}/> : "添加标签"
                    }
                </span>
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
                <Input
                    id="outlined-name"
                    label="Name"
                    onChange={handleChange}
                    variant="outlined"
                    style={{margin: 8, padding: 10}}
                    value={labelName}
                />

                    <div className="flexContainer" style={{justifyContent: "space-around", margin: "20px 0px"}} >
                        {
                            labelColors.map((color, index) =>
                                <div style={{height: 24, width: 24, backgroundColor: color, cursor: "pointer", borderRadius: "50%", color: "white"}} className="flexCenter" key={index} onClick={() => handleSelectColor(index)}>
                                    {selectedColor === index && <i className="iconfont icon-cc-yes-crude"></i>}
                                </div>
                            )
                        }
                    </div>
                <div className="flexCenter" style={{padding: 8}}>
                    <Button variant="contained" color="primary" size="large" fullWidth={true} disabled={labelName === ""} onClick={handleAddLabel}>
                        添加
                    </Button>
                </div>
            </Popover>
        </div>
    )
}

export default AddLabel;
