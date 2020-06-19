import React from "react"
import { Row, Col, Button } from "reactstrap"

import imageTitle from "../../assets/img/delivery-man.png"
import imageCloud from "../../assets/img/cloud.png"
import imageMarker from "../../assets/img/marker.png"
import imageWater from "../../assets/img/water.png"
import "./BoxTitle.css"


function BoxTitle({ day, maxT, minT }) {
  return (
    <div className="box-title">
      <Row className="row-title-detail">
        <Col className="col-image" md={3}>
          <img className="image" src={imageTitle} alt="image1" />
        </Col>
        <Col className="col-title-detail" md={9}>
          <div>
            <div>41eq</div>
            <div>US AQI</div>
          </div>
          <div>
            <div>Good</div>
            <div>pm2.5 g/m</div>
          </div>
        </Col>
      </Row>
      <Row className="row-title-value">
        <Col>
          <div className="value-box-flex">
            <img className="image image-cloud" src={imageCloud} alt="imge2" />
            <div className="text">26</div>
          </div>
        </Col>
        <Col>
          <div className="value-box-flex">
            <img className="image image-water" src={imageWater} alt="imge3" />
            <div className="text">80</div>
          </div>
        </Col>
        <Col>
          <div className="value-box-flex">
            <img className="image image-marker" src={imageMarker} alt="imge4" />
            <div className="text">13.4 km/h</div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default BoxTitle