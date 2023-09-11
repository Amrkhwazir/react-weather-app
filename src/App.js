import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [weatherArr, setWeatherArr] = useState([]);
  const [citySearch, setCitySearch] = useState('');

async  function fetchData(){
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=acc34772c380bdc2c6fbd4b39da86263&units=metric`);
    const data = await res.json();
    // console.log(data)
    setWeatherArr(data);
  } catch (error) {
   console.log(error) 
  }
  }

useEffect(()=>{
  fetchData();
},[]);

function changeInputHandler (val){
  // console.log(value)
  setCitySearch(val.target.value)
};

function searchHandler(){
  fetchData();
}

  return(
    <div style={{border: "1px solid black", margin: "40px 350px", width: "400px", height: "450px", padding: "40px 60px"}}>
    <div className='mainSec' style={{width: "340px",}}>
    
      <input 
      type='text' 
    value={citySearch}
      placeholder='Enter your country name' 
      style={{padding: "5px 30px"}} 
      onChange={changeInputHandler}
       />

      <button onClick={searchHandler} style={{marginLeft: "10px", padding: "5px 20px", backgroundColor: "royalblue", color: "white", border: "none"}}>search</button>
      <MainArea value={weatherArr} />

    </div>
    </div>
  )
};


function MainArea({value}){
  
  return(
    <>
     <p className="cityName">City Name: {value.name}</p>
     <p>Temprature: {value.main.temp == undefined ? "" : value.main.temp}</p>
     <p >{}</p>
     <p>Temperature Minimum: {value.main.temp_min} °C</p>
     <p>Temperature Maximum: {value.main.temp_max} °C</p>
     <p>About Weather: {value.weather[0].description}</p>
     
    </>
  )
  
}

// function WeatherData(){
//   return(

//     <div className="cardInfo">

//     </div> 

//   )
// }

export default App;
