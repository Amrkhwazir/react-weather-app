import './App.css';
import { useEffect, useState } from 'react';
import clear_bg from "./assets/sunny.jpg";
import cloud_bg from "./assets/cloud.png";
import drizzle_bg from "./assets/drizzle.png";
import thunder_bg from "./assets/thunder.jpg";
import snow_bg from "./assets/snow.jpg";
import haze_bg from "./assets/haze.jpg";

function App() {
  const [weatherArr, setWeatherArr] = useState(null);
  const [citySearch, setCitySearch] = useState('');
  const [weatherName, setWeatherName] = useState("");

async  function fetchData(){
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=acc34772c380bdc2c6fbd4b39da86263&units=metric`);
    const data = await res.json();
    // console.log(data)

    setWeatherArr(data);
    setWeatherName(data.weather[0].main)
  } catch (error) {
   console.log(error) 
  }
  }

useEffect(()=>{
  fetchData();
},[citySearch]);

function setBackground() {
  if (
    weatherName == "Haze" ||
    weatherName == "Mist" ||
    weatherName == "Smoke" ||
    weatherName == "Dust" ||
    weatherName == "Fog" ||
    weatherName == "Sand" ||
    weatherName == "Ash" ||
    weatherName == "Squall" ||
    weatherName == "Tornado"
  ) {
    return `url(${haze_bg})`;
  } else if (weatherName == "Rain" || weatherName == "Drizzle") {
    return `url(${drizzle_bg})`;
  } else if (weatherName == "Clouds") {
    return `url(${cloud_bg})`;
  } else if (weatherName == "Thunderstorm") {
    return `url(${thunder_bg})`;
  } else if (weatherName == "Snow") {
    return `url(${snow_bg})`;
  } else if (weatherName == "Clear") {
    return `url(${clear_bg})`;
  }
}


  return(
    <div style={{ margin: "40px 220px", width: "850px", height: "450px", borderRadius: "15px 15px 15px 15px", backgroundColor: "whitesmoke", display: "flex"}}>
    <div className='mainSec' style={{width: "280px", height:"430px", borderRadius: "15px 0px 0px 15px", padding:"10px",backgroundColor: "white" }}>
    
    <>   
      <input
      type='text' 
    value={citySearch}
      placeholder='Enter your country name' 
      style={{padding: "5px 30px"}} 
      onChange={(e)=> setCitySearch(e.target.value)}
      />
      </>

    
       <>
       {!citySearch ?   <p style={{textAlign: "center"}}>Image not found</p> : (

<div
className="backgoundContainer"
style={{
  backgroundImage: setBackground(),
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "150px",
  height:"150px",
  // border: "1px solid black",
  marginLeft: "70px",
  borderRadius: "8px",
  marginTop: "10px"
  
}}>

</div>
       )}
       </>

<>
{!citySearch ? (
    <p style={{textAlign: "center"}}>data not found</p>
    ) : (

    <div style={{backgroundColor: "white", textTransform: "capitalize"}}>

    <h1 style={{backgroundColor: "white", textAlign: "center"}}>{ weatherArr.name}</h1>
    <h3 style={{backgroundColor: "white", textAlign: "center"}}>{`${weatherArr?.main?.temp}°C`}</h3>
    <p style={{backgroundColor: "white", textAlign: "center"}}> Weather Description: {weatherArr?.weather?.[0]?.description}</p>
    
   </div> 
    )}
</>
     
 </div>

 <div className='details' style={{padding:"5px 20px",backgroundColor: "whitesmoke", width: "100%",borderRadius: "0px 15px 15px 0px", fontWeight: "500",}}>
 <p style={{fontSize: "24px", color: "black", textTransform: 'capitalize'}}>today's highlights</p>

 <div className='cardCont' style={{height:"340px", display: "flex", flexWrap: "wrap", justifyContent: "space-around", textAlign: "center",}}>

  <div style={{height:"150px", width: "150px", marginTop: "7px", backgroundColor: "white", borderRadius:"15px", paddingTop:"10px"}}>
    <p>wind status</p>
    <h4>{!citySearch ? "": `${weatherArr?.wind?.speed} km/h`}</h4>
  </div>

  <div style={{ height:"150px", width: "150px", marginTop: "7px", backgroundColor: "white", borderRadius:"15px", paddingTop:"10px"}}>
  <p>min | max</p> 
  <h4>{!citySearch ? "" : `min ${weatherArr?.main?.temp_min}°C`} <br />  {!citySearch ? " ": `min ${weatherArr?.main?.temp_max}°C`}</h4>
  </div>

  <div style={{ height:"150px", width: "150px", marginTop: "7px", backgroundColor: "white", borderRadius:"15px", paddingTop:"10px"}}>
    <p>Pressure</p>
    <h4>{!citySearch ? "": `${weatherArr?.main?.pressure}°C`}</h4>
  </div>

  <div style={{ height:"150px", width: "150px", marginTop: "7px", backgroundColor: "white", borderRadius:"15px", paddingTop:"10px"}}>
    <p>humidity</p>
    <h4>{!citySearch ? "": `${weatherArr?.main?.humidity}%`}</h4>
  </div>

  <div style={{ height:"150px", width: "150px", marginTop: "7px", backgroundColor: "white", borderRadius:"15px", paddingTop:"10px"}}>
    <p>visibility</p>
    <h4>{!citySearch ? "": `${weatherArr?.visibility}km`}</h4>
  </div>

  <div style={{ height:"150px", width: "150px", marginTop: "7px", backgroundColor: "white", borderRadius:"15px", paddingTop:"10px"}}>
    <p>feels_like</p>
    <h4>{!citySearch ? "": `${weatherArr?.main?.feels_like}°C`}</h4>
  </div>
  
 </div>
 </div>
    </div>
  )
};


export default App;
