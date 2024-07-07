import wind from "../Assets/wind.png"
function WeatherProperties({
    name,value
}){
    return(
        // <div className="w-1/2 flex justify-center m-5 border-2">
         <div className="flex w-1/2 items-center h-fit justify-center ">
            <img src={wind} className="h-fit"/>
            <div className="flex flex-col m-3 w-fit p-2 justify-center">
                <h4 className="text-xl font-thin">
                    {value}
                </h4>
                <p className="font-thin opacity-80">
                    {name}
                </p>
            </div>
         {/* </div> */}
            
        </div>
    );
}

export default WeatherProperties;