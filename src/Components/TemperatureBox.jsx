import WeatherProperties from "./WeatherProperties";
function TemperatureBox(
    {
        temperature,weatherName,city,country,humidity,wind,visibility,pressure
    }
)
{
    return(
        <div className="w-full h-full border-2 flex flex-col items-center text-white p-6 rounded-3xl">
         <h2 className="text-8xl font-thin">
            {temperature}°C
         </h2>
         <p className="p-2 font-thin">
            {weatherName}
         </p>
         <p className="text-md p-2 font-thin">
            {city}, <b>{country}</b>
         </p>
         <div className="flex w-full h-full flex-wrap">
            <WeatherProperties name="Humidity" value = {humidity}/>
            <WeatherProperties name="Wind Speed" value = {wind}/>
            <WeatherProperties name="Visibility" value = {visibility}/>
            <WeatherProperties name="Pressure" value = {pressure}/>
         </div>

        </div>
    )
}
export default TemperatureBox;