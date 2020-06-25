import React from "react"
import "./BoxValue.css"

import cloudImage from "../../assets/img/cloud.png"

function BoxValue() {
    return (
        <div className="box-value">
            <div className="day">Tuesday</div>
            <div className="data">
                <img className="image" src={cloudImage} />
                <div>
                    <div className="value">12"</div>
                    <div className="value">23"</div>
                </div>
                {/* <hr className ="Horizontal" ></hr> */}
            </div>
        </div>

        // <div className = "flex-container">
        //     <Alert color="light">
        //     <div className = "day-flex">Tuesday</div>
        //     </Alert>
        //     <div className = "data-flex">
        //     <img src={cloudImage} />
        //     </div> 
        //     <div>
        //     <span className = "flex-item3">25°</span>
        //     <span className = "flex-item4">23°</span>
        //     </div>

        // </div>

    )

}
export default BoxValue