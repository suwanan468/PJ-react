import React from "react"
import BoxTitle from "./BoxTitle"
import BoxValue from "./BoxValue"
import './BoxValue.css';

function BoxTem() {
    return (
        <div className="Box-Tem">
          
                <BoxValue />
           
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
export default BoxTem