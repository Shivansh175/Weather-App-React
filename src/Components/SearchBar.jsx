import { useState } from "react";

function SearchBar({setCity,onCityChange}){
    const[help,setHelp] = useState("");

    return(
        <div className="h-14 w-1/3 mt-5 rounded-full flex justify-center overflow-hidden ">
            <input type="text" 
            placeholder="Search your City" 
            className="h-full w-full px-5 py-5 outline-none border-none text-lg"
            onChange={(e)=>{setHelp(e.target.value)}}
            />
            
            <button className="text-black px-5 py-4 flex justify-center items-center bg-white border-black"
            onClick={()=>{setCity(help); onCityChange(); }}
            >
                <i className="fa-solid fa-magnifying-glass" />
            </button>
        </div>
    )
}

export default SearchBar;