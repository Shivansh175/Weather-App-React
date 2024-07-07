import { useEffect, useState } from "react";
import {API_KEY} from "../constants";

function useWeatherAPI(city)
{
    const [data,setData] = useState({});

    useEffect(()=>{
        try {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=${API_KEY}`).
            then((res)=> res.json()).
            then((res)=>{ setData(res)});
        } 
        catch (error) {
            console.error("API Error : ",error);
        }
        
    },[city])

    return data;
}

export default useWeatherAPI;