import React from "react";
import Divider from "@material-ui/core/Divider/Divider";

const MenuTopTab = (props) => {


    return (
        <>
            <div className="flexCenter"
             style={{margin: "0 20px", padding: "12px 20px", position: "relative"}}>
                            {
                                props.handleBackMenu &&
                                <span style={{position: "absolute", left: 0}}>
                                    <i className="iconfont icon-back hoverIndicator" style={{fontSize: "23px"}}
                                       onClick={props.handleBackMenu}/>
                                </span>
                            }
            <span style={{fontSize: "18px"}}>{props.title}</span>
            <span style={{position: "absolute", right: 0}}>
                            <i className="iconfont icon-baseline-close-px hoverIndicator" style={{fontSize: "23px"}}
                               onClick={props.handleCloseMenu}/>
                        </span>
            </div>
            <Divider light />
         </>
    )
}

export default MenuTopTab;
