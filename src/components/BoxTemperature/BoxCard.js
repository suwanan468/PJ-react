import React from "react"
import BoxTitle from "./BoxTitle"
import BoxValue from "./BoxValue"
import './BoxCard.css';

function BoxCard() {
    return (
        <div className="box-card">
          
                <BoxTitle />
           
            <div>
                <div>
                    <BoxValue />
                </div>
                <div>
                    <BoxValue />
                </div>
                <div>
                    <BoxValue />
                </div>
            </div>
        </div>
    )
}
export default BoxCard