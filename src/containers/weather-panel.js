import React from 'react'
import moment from 'moment';

export default (props) => {
  const rows = props.weatherRows.map( (row) => {
    const time = `${moment(row.dt*1000).format("HH:mm A")}`
    const icon = `http://openweathermap.org/img/w/${row.weather[0].icon}.png`
    const iconName = row.weather[0].description
    const temp = `${Math.round(row.main.temp)}°C`

    return(
      <div key={time} className="container">
        <li className="row weatherRow">
          <time className="timestamp col-6 date">{time}</time>
          <span className="col-6 condition text-right">
            <span>
              <img src={icon} alt={iconName} title={iconName}/>
            </span>
            <span className="temp">{temp}</span>
          </span>
          
        </li>
      </div>
    )
  })

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="weather-card">
            <div className="top">
              <div className="data wrapper">
              { props.today ?
                <div>
                  <h2 className="city">{props.city}</h2>
                  <h3 className="day">Today</h3>
                </div> :
                <div>
                  <h2 className="city">{props.city}</h2>
                  <h3 className="day">{props.day}</h3>
                </div>
              }
              </div>
            </div>
            <div className="bottom">
              <div className="wrapper">
                <ul className="forecast">
                  {rows}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
