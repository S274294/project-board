import React, {useState} from "react";
import MenuTopTab from "./MenuTopTab";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";

const DeleteColumn = (props) => {

    const [isError, setIsError] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
        // 1.如果是清空任务列表则直接返回由父元素处理
        if(inputValue == props.authValue){
            props.handleClick();
        }else{
            setIsError(true);
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setIsError(false);
    }

    const handleKeyPress = (e) => {
        if(e.key == "Enter" && inputValue != ""){
            handleClick();
        }
    }

    return (
        <>
            <MenuTopTab handleCloseMenu={props.handleCloseMenu} title={props.tabTitle} handleBackMenu={props.handleBackMenu}/>
            <div style={{padding: 16}}>
                <div className="flexCenter" style={{marginBottom: 16}}>
                    {props.children}
                </div>
                    {
                        props.authValue ?
                            <div className="flexContainer" style={{justifyContent: "space-around", alignItems: "center"}}>
                                    <TextField
                                        error={isError}
                                        size="small"
                                        label={"输入「" + props.authValue + "」"}
                                        margin="normal"
                                        variant="outlined"
                                        onChange={(e) => handleChange(e)}
                                        onKeyPress={handleKeyPress}
                                        style={{marginBottom: 0, marginTop: 0, flex: 8, marginRight: 8}}

                                    />
                                <Button variant="contained" color="secondary" fullWidth={true} onClick={ handleClick} style={{flex: 2}} disabled={inputValue === ""}>
                                    {props.btnName}
                                </Button>
                            </div>

                            :
                            <div className="flexCenter">
                                <Button variant="contained" size="large" fullWidth={true} onClick={props.handleClick} color="secondary">
                                    {props.btnName}
                                </Button>
                            </div>
                    }


            </div>
        </>
    )
}

export default DeleteColumn;
