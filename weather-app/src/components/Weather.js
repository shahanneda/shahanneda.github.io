import React from "react";

const Weather = (props) =>{
  return (

    <div className="card-panel red z-depth-1" style={{height: "75vh"}}>
      {props.city&& props.country && <div>f</div>}
      {props.city&& props.country && <p className="flow-text white-text card-panel blue z-depth-4 lighten-3">Location: {props.city}, {props.country}</p>}
      {props.temperature && <p className="flow-text white-text card-panel orange z-depth-4 lighten-3">Temperature: {props.temperature}</p>}
      {props.humidity && <p className="flow-text white-text card-panel green z-depth-4 lighten-3">Humidity: {props.humidity}</p>}
      {props.description && <p className="flow-text white-text card-panel purple z-depth-4 lighten-3">Condition: {props.description}</p>}
      {props.error && <p className="flow-text white-text card-panel red z-depth-4 lighten-3">{props.error}</p>}
    </div>
  );
}
export default Weather;
