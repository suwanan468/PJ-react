import React from "react"
import { Row, Col } from "reactstrap"
import BoxValue from "./BoxValue"
import "./BoxTem.css"

const defaultValue = {
    day: "",
    t_max: "",
    t_min: "",
    ic: ""
}
function BoxTem({ today=defaultValue, tomorrow=defaultValue, next2Days=defaultValue }) {
    return (
        <div className="box-tem">
            <Row>
                <Col><BoxValue
                    day={today.day}
                    tMax={today.t_max}
                    tMin={today.t_min}
                    ic={today.ic} /></Col>
                <Col><BoxValue /></Col>
                <Col><BoxValue /></Col>
            </Row>

        </div>
    )
}
export default BoxTem