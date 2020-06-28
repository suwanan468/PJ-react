import React from "react"
import "./BoxValue.css"

const imageWeather = "https://www.airvisual.com/images/"

function BoxValue({day ,tMax ,tMin ,ic}) {
    return (
        <div className="box-value">
            <div className="day">{day}</div>
            <div className="data">
                <img className="image" src={imageWeather + ic + ".png"} />
                <div>
                    <div className="value">{tMin}°</div>
                    <div className="value">{tMax}°</div>
                </div>
             
            </div>
        </div>

    )

}
export default BoxValue