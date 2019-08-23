import React, {useState} from "react"
import Popover from "@material-ui/core/Popover/Popover";

const PriorityPopover = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        e.stopPropagation();
        setAnchorEl(e.currentTarget);
    }
    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

    const changePriority = (priority) => {
        props.changePriority(priority);
        handleCloseMenu();
    }

    return (
        <>
            <div onClick={handleClick}>
                {props.children}
            </div>
            <Popover
                id="userPicker"
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
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
                <div style={{width: 200}}>
                    <div className="singlePriorityContainer" onClick={() => changePriority(1)}>
                        <span style={{color: "#A6A6A6", border: "1px solid #A6A6A6", padding: "0 9px", height: 28, borderRadius: 3, lineHeight: "28px"}}>
                            普通
                        </span>
                        {
                            props.priority === 1 && <i className="iconfont icon-cc-yes-crude"/>
                        }
                    </div>
                    <div className="singlePriorityContainer" onClick={() => changePriority(2)}>
                          <span style={{color: "#FFAF38", border: "1px solid #FFAF38", padding: "0 9px", height: 28, borderRadius: 3, lineHeight: "28px"}}>
                            紧急
                        </span>
                        {
                            props.priority === 2 && <i className="iconfont icon-cc-yes-crude"/>
                        }
                    </div>
                    <div className="singlePriorityContainer" onClick={() => changePriority(3)}>
                          <span style={{color: "#FF4F3E", border: "1px solid #FF4F3E", padding: "0 9px", height: 28, borderRadius: 3, lineHeight: "28px"}}>
                            非常紧急
                        </span>
                        {
                            props.priority === 3 && <i className="iconfont icon-cc-yes-crude"/>
                        }
                    </div>
                </div>
            </Popover>
        </>
    )

}

export default PriorityPopover;
