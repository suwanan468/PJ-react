import React from "react"
import { Row, Col } from "reactstrap"
import BoxValue from "./BoxValue"
import "./BoxTem.css"

function BoxTem() {
    return (
        <div className="box-tem">
            <Row>
                <Col><BoxValue /></Col>
                <Col><BoxValue /></Col>
                <Col><BoxValue /></Col>
            </Row>
           
        </div>
    )
}
export default BoxTem