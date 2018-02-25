import React from "react";
import Titles from "./components/Titles.js"
import Form from "./components/Form.js"
import Weather from "./components/Weather.js"

const API_KEY = "0f0c1c71e7499a99f0ac50ab2591139b";
class App extends React.Component{
  state ={
    temperature: undefined,
    city: undefined,
    country:undefined,
    humidity:undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    if(city && country && data.cod !="404"){
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country:data.sys.country,
        humidity: data.main.humidity,
        description:data.weather[0].description,
        error:""

      });
    }else if(data.cod =="404"){
      this.setState({
        temperature: undefined,
        city: undefined,
        country:undefined,
        humidity:undefined,
        description: undefined,
        error: "City/Country not found!"

      })
    }
    else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country:undefined,
        humidity:undefined,
        description: undefined,
        error: "Please enter the values."

      })
    }
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="card-panel blue lighten-2 col l6 m12" style={{height: "75vh"}}>
            <Titles />
            <Form getWeather={this.getWeather}/>
          </div>
          <div className="col l6 m12 s12">
            <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
            />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
