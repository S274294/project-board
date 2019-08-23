import React, {useState} from "react";
import Divider from "@material-ui/core/Divider/Divider";
import MenuTopTab from "./MenuTopTab";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";

const UpdateColumn = (props) => {

    const [inputValue, setInputValue] = useState(props.columnTitle ? props.columnTitle : "");

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter" && inputValue !== ""){
            props.handleClick(inputValue)
        }
    }

    return (
        <>
            <MenuTopTab handleCloseMenu={props.handleCloseMenu} title={props.tabTitle} handleBackMenu={props.handleBackMenu}/>
            <div style={{padding: 16}}>
                <div className="flexCenter">
                    <TextField
                        id="outlined-name"
                        size="small"
                        label="列表名称"
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => handleChange(e)}
                        defaultValue={inputValue}
                        onKeyPress={handleKeyPress}
                        style={{marginBottom: 16, marginTop: 0}}
                        autoFocus={true}
                    />
                </div>

                <Divider light />
                <div className="flexCenter">
                    <Button variant="contained" color="primary" size="large" fullWidth={true} disabled={inputValue === ""} onClick={() => props.handleClick(inputValue)}>
                        {props.btnName}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default UpdateColumn;
