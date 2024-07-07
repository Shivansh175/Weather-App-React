import cloud from "../Assets/cloud.png"
// import clear from "../Assets/clear.png"
// import rain from "../Assets/rain.png"
// import humidity from "../Assets/humidity.png"
// import snow from "../Assets/snow.png"
// import drizzle from "../Assets/drizzle.png"
// import wind from "../Assets/wind.png"

function WeatherLogo()
{
    // const src = `./Assets/${props.main}.png`;
    return(
        <div className="h-fit w-2/5 flex justify-center scale-125">
            <img src={cloud} alt="cloudy"/>
        </div>
    )
}

export default WeatherLogo;