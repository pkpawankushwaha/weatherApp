import React, { useEffect, useState } from 'react';

const ReactApp=()=>{
    const [city,setCity]=useState('Gorakhpur')
    const [cityname,setCityName]=useState('Gorakhpur')
    const [search,setSearch]=useState("Gorakhpur")
    const [coord,setCoord]=useState(["0","1"]);
    useEffect(()=>{
        setCity("Wait")
        const fetchAPI=async ()=>{
            
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3bd5599cff906aa5f9efc20ce75c0b47`;
            const response=await fetch(url);
            const resJson=await response.json();
            setCity(resJson.main);
            setCityName(resJson.name)
            if(resJson.coord)
            setCoord([resJson.coord.lon,resJson.coord.lat]);
            console.log(resJson)
            //if(status)setStatus(false)
        }
        fetchAPI();
    },[search]);


    return (
        <div className="reactApp-div">
            
            <input
            type="search"
            className="search-box"
            defaultValue={search}
            onChange={(event)=>{
                setSearch(event.target.value)
                setCity(event.target.value)
                
            }}/>

            {!city?
            (<p>No Data</p>):
                (
                <div>
                    <p>City : {cityname}</p>
                    <p>Temperature : {city.temp} Celsius</p>
                    <br></br>
                    <p>Latitude :  {coord[0]} | Longitude : {coord[1]}</p>
                </div>
                )
            }
        </div>
        
    )
}

export default ReactApp;
