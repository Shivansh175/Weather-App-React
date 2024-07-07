import SearchBar from "./Components/SearchBar"
import WeatherLogo from "./Components/WeatherLogo"
import TemperatureBox from "./Components/TemperatureBox"
import useWeatherAPI from "./Hooks/useWeatherAPI"
import { useEffect, useState } from "react"
function App() {
  const[info,setInfo] = useState(["Mumbai",301.14,"IN",1002,89,1500,"Clouds",0.0]);
  const[city,setCity] = useState("Mumbai");
  const[temperature,setTemperature] = useState(301.14);
  const[country,setCountry] = useState("IN");
  const[pressure,setPressure] = useState(1002);
  const[humidity,setHumidity] = useState(89);
  const[visibility,setVisibility] = useState(1500);
  const[weatherName,setWeatherName] = useState("Clouds");
  const[wind,setWind] = useState(0.0);

  const weatherInfo = useWeatherAPI(city);

  const onCityChange = ()=>{
    useEffect(()=>{
      setTemperature(weatherInfo.main["temp"])
      setCountry(weatherInfo.sys["country"])
      setPressure(weatherInfo.main("pressure"))
      setHumidity(weatherInfo.main("humidity"))
      setVisibility(weatherInfo.visibility)
      setWeatherName(weatherInfo.weather[0]["main"]);
      setWind(weatherInfo.wind["speed"])
    })

      // console.log(weatherInfo.main["temp"]);
  }

  return (
    <div className="w-full h-screen bg-[url('https://media.istockphoto.com/id/1261069378/vector/falling-raindrops-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=ejpKPrxjg38xm2wvpjlLpKlbA2uDIM8oh-DWG3SD1os=')] bg-no-repeat bg-center bg-cover z-0 justify-center flex items-center">
      <div className="w-full h-screen  flex justify-center items-center">
        <div className="w-9/12 h-4/5 border-2 border-white bg-center bg-cover bg-no-repeat rounded-3xl ">

          <div className="w-full h-full backdrop-blur-lg flex flex-col items-center p-6 rounded-3xl">
            {/* <h2 className="text-4xl text-white font-bold"> Weather-App-React </h2> */}
            <SearchBar 
              setCity = {setCity} 
              onCityChange={onCityChange}

            />
            <div className="flex justify-center w-full h-full items-center mt-4">
              <WeatherLogo />
              
            <div className="bg-[url('https://media.istockphoto.com/id/1261069378/vector/falling-raindrops-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=ejpKPrxjg38xm2wvpjlLpKlbA2uDIM8oh-DWG3SD1os=')] bg-no-repeat bg-cover bg-center w-2/5 h-fit rounded-3xl">
              <TemperatureBox 
                temperature = {temperature}
                weatherName = {weatherName}
                city = {city}
                country = {country}
                humidity = {humidity}
                wind = {wind}
                visibility = {visibility}
                pressure = {pressure}
              />
            </div> 
              
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
