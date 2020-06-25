import React from "react"
import { Row, Col, Button } from "reactstrap"


import imageTitle from "../../assets/img/delivery-man.png"
import imageCloud from "../../assets/img/cloud.png"
import imageMarker from "../../assets/img/marker.png"
import imageWater from "../../assets/img/water.png"
import imageFrame from "../../assets/img/Frame.png"
import "./BoxTitle.css"

function getAQIDesc(value) {
  if ((value >= 0) && (value <= 25))
    return "Very good quality"
  else if ((value > 25) && (value <= 50))
    return "Good quality"
  else if ((value > 51) && (value <= 100))
    return "Medium"
  else if ((value >101) && (value <=200))
    return "affect health"
  else if ((value >151) && (value <=200))
    return "Affecting health"

}

function BoxTitle({ aqi }) {

  return (
    <div className="้header-text">
      <h3><div className="text-head">Songkhla air quality index</div></h3>
      <hr className="horizontal" ></hr>
      <div className="header-desc">
        <div className="air-index">
          AIR QUALITY INDEX
        </div>
        <div className="text-time">08.00 , jube 29</div>
      </div>
      <div className="box-title">
        <Row className="row-title-detail">
          <Col className="col-image" md={3}>
            <img className="image" src={imageTitle} alt="image1" />
          </Col>
          <Col className="col-title-detail" md={9}>
            <div className="value-weather-flex">
              <div className="text">{aqi}</div>
              <div className="text1">US AQI</div>
            </div>
            <div className="value-weather-flex">
              <div className="text">{getAQIDesc(aqi)}</div>
              <div className="text2">pm2.5 g/m</div>
            </div>
          </Col>
        </Row>
        <Row className="row-title-value">
          <Col>
            <div className="value-box-flex">
              <img className="image image-cloud" src={imageCloud} alt="imge2" />
              <div className="text">26°</div>
            </div>
          </Col>
          <Col>
            <div className="value-box-flex">
              <img className="image image-water" src={imageWater} alt="imge3" />
              <div className="text">88</div>
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
    </div>
  )
}
export default BoxTitle