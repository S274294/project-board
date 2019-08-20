import React, {useEffect, useRef, useState} from 'react';
import {Button, TextField} from "@material-ui/core";

const AddColumn = (props) => {

    const [content, setContent] = useState("");
    const [isContentEmpty, setIsContentEmpty] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const ref = useRef(null);

    const handleChange = (e) => {
        setContent(e.target.value);
        if(e.target.value != null && e.target.value.trim() != ""){
            setIsContentEmpty(false);
        }else{
            setIsContentEmpty(true);
        }
    }

    const handleKeyUp = (e) => {
        if(e.keyCode === 13 && !isContentEmpty){
            handleCreate(content);
        }
    }
    const handleCreate = (e) => {
        props.handleCreate(content);
        setContent("");
        setIsContentEmpty(true);
        setIsFormOpen(false)
    }

    useEffect(() => {
        // 1.绑定点击事件
        const root = document.getElementById("root");
        root.addEventListener("click", handleClickOutside);
        return () => {
            // 2.移除点击事件
            root.removeEventListener("click", handleClickOutside);
        };
    })

    const handleClickOutside = (event) =>{
        if (ref.current && !ref.current.contains(event.target) && isContentEmpty) {
            setIsFormOpen(false);
        }
    }
    const handleOpenClick = () => {
        setIsFormOpen(true);
    }


    return (
        isFormOpen ?
            <div>
                <div style={{padding: 16, borderTop: "1px solid #D7D7D7"}} ref={ref} className="addColumn">
                    <TextField
                        id="outlined-name"
                        label={props.label}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        value={content}
                        onChange={handleChange}
                        onKeyUp={handleKeyUp}
                    />
                    <div>
                        <Button variant="contained" color="primary" disabled={isContentEmpty} onClick={handleCreate}>创建</Button>
                    </div>
                </div>
            </div>

            :
            <div>
                <div style={{borderTop: "1px solid #D7D7D7", display: "flex", alignItems: "center", padding: 10, cursor: "pointer"}} onClick={handleOpenClick} className="addColumn">
                    <i className="iconfont icon-iconfontadd" style={{marginRight: 5}}></i>  {props.children}
                </div>
            </div>
    )
}

export default AddColumn;
