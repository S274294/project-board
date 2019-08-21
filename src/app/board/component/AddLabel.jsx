import React, {useState, useRef} from "react";
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

const AddLabel = (props) => {

    const [menu, setMenu] = useState(null);
    const [selectedColor, setSelectedColor] = useState(0);
    const [labelName, setLabelName] = useState("");
    const [labelArray, setLabelArray] = useState([]);

    const handleClick = (event) => {
        setMenu(event.currentTarget);
    }

    const handleChange = (e) => {
        setLabelName(e.target.value);
    }
    const handleClose = () => {
        setMenu(null);
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
        <div className="flexContainer" style={{padding: 8}}>
            <div style={{flex: 2, display: "flex", justifyContent: "center", alignItems: "center"}}><i className="iconfont icon-label"/></div>
            <div style={{flex: 8, flexWrap: "wrap"}} className="flexContainer">
                {
                    labelArray.map(label =>
                        <div className="label" style={{backgroundColor: label.color}} key={label.id}>
                            <div className="labelContentContainer">{label.name}</div>
                            <div className="labelCloseIconContainer" id="closeIconContainer" onClick={() =>handleDeleteLabel(label.id)}>
                                <i className="iconfont icon-baseline-close-px" style={{marginLeft: 4}}></i>
                            </div>
                        </div>)
                }
                <span style={{cursor: "pointer"}} onClick={handleClick}>
                    {
                        labelArray.length > 0 ? <i className="iconfont icon-iconfontadd" style={{lineHeight: "32px"}}/> : "添加标签"
                    }
                </span>
            </div>
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
                    variant="outlined"
                    style={{margin: 8}}
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
            </Menu>
        </div>
    )
}

export default AddLabel;
