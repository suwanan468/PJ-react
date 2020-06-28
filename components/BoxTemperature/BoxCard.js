import React, { useEffect, useState } from "react"
import BoxTitle from "./BoxTitle"
import BoxTem from "./BoxTem"
import querystring from "querystring"
import moment from "moment"
import './BoxCard.css';
import dataJson from "../../data.json"

function BoxCard() {
    const [ready, setReady] = useState(false)
    const [aqius, setAQIUS] = useState()
    const [ug, setUG] = useState()
    const [tp, setTP] = useState()
    const [hu, setHU] = useState()
    const [ws, setWS] = useState()
    const [ic, setIC] = useState()
    const [todayTem, setTodayTem] = useState()
    const [tomorrowTem, setTomorrowTem] = useState()
    const [next2DaysTem, setNext2DaysTem] = useState()

    useEffect(() => {
        /*const params = {
          lat: "7.0069759",
          lon: "100.5009291",
          key: "7ddf46c0-f4aa-4754-afef-c663b70f5f49",
          fbclid: "IwAR36LDxlFGhC_JjTzDKxBttGmatKZZm_mQd56a7V4Q503590DmFmvvInXho"
        }
        const uri = "http://api.airvisual.com/v2/nearest_city" + querystring.stringify(params)
        fetch("../../data.json", {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            'Access-Control-Allow-Credentials': 'true',
            "mode": "cors"
          }
        }).then(resp => {
          return resp.json()
        }).then(data => {
            setData(data)
        })*/

        if (!ready) {
            const data = dataJson.data
            setAQIUS(data.current.pollution.aqius)
            setUG(343)
            setTP(data.current.weather.tp)
            setHU(data.current.weather.hu)
            setWS(data.current.weather.ws)
            setIC(data.current.weather.ic)

            const todayTimestamp = data.current.weather.ts

            const dayText = moment(todayTimestamp).format("dddd")
            const today = {
                day: dayText,
                t_max: data.current.weather.tp,
                t_min: "",
                ic: data.current.weather.ic
            }
            const tomorrow = {
                day: moment(todayTimestamp).add("1", "days").format("dddd"),
                t_max: "",
                t_min: "",
                ic: ""
            }
            const next2Days = {
                day: moment(todayTimestamp).add("2", "days").format("dddd"),
                t_max: "",
                t_min: "",
                ic: ""
            }

            setTodayTem(today)           
            setTomorrowTem(tomorrow)
            setNext2DaysTem(next2Days)
            setReady(true)
        }
    })

    return (
        <div className="box-card">
            <BoxTitle aqius={aqius} ug={ug} tp={tp} hu={hu} ws={ws} ic={ic} />
            <BoxTem today={todayTem} tomorrow={tomorrowTem} next2Days={next2DaysTem} />
        </div>
    )
}
export default BoxCard