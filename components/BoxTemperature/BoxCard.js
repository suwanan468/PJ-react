import React from "react"
import BoxTitle from "./BoxTitle"
import BoxTem from "./BoxTem"
import './BoxCard.css';

function BoxCard() {
    return (
        <div className="box-card">
            <BoxTitle aqi={41} />
            <BoxTem />
        </div>
    )
}
export default BoxCard