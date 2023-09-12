import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [weatherArr, setWeatherArr] = useState('');
  const [citySearch, setCitySearch] = useState('karachi');

async  function fetchData(){
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=acc34772c380bdc2c6fbd4b39da86263&units=metric`);
    const data = await res.json();
    console.log(data)
    setWeatherArr(data);
  } catch (error) {
   console.log(error) 
  }
  }

useEffect(()=>{
  fetchData();
},[citySearch]);


  return(
    <div style={{ margin: "40px 220px", width: "850px", height: "450px", borderRadius: "15px 15px 15px 15px", backgroundColor: "whitesmoke", display: "flex"}}>
    <div className='mainSec' style={{width: "280px", height:"430px", borderRadius: "15px 0px 0px 15px", padding:"10px",backgroundColor: "white" }}>
    
      <input
      type='text' 
    value={citySearch}
      placeholder='Enter your country name' 
      style={{padding: "5px 30px"}} 
      onChange={(e)=> setCitySearch(e.target.value)}
       />

      {!weatherArr ? (
    <p>data not found</p>
    ) : (
    <div style={{backgroundColor: "white"}}>
    <h1 style={{backgroundColor: "white", textAlign: "center"}}>{weatherArr.name}</h1>
    <p style={{backgroundColor: "white", textAlign: "center"}}>{weatherArr.weather[0].description}</p>
    <p style={{backgroundColor: "white", textAlign: "center"}}>{weatherArr.weather[0].main}</p>
    
   </div> 
    )}
 </div>

 <div className='details' style={{padding:"5px 20px",backgroundColor: "whitesmoke", width: "100%",borderRadius: "0px 15px 15px 0px", fontWeight: "500", color: "gray"}}>
 <p style={{fontSize: "24px", color: "black"}}>today's highlights</p>

 <div className='cardCont' style={{height:"340px", display: "flex", flexWrap: "wrap", justifyContent: "space-around", textAlign: "center", fontSize: "12px",}}>
  <div style={{ height:"150px", width: "150px", marginTop: "7px", backgroundColor: "white", borderRadius:"15px", paddingTop:"10px"}}>
    <p>wind status</p>
  </div>
  <div style={{ height:"150px", width: "150px", marginTop: "7px", backgroundColor: "white", borderRadius:"15px", paddingTop:"10px"}}>
  <p>min | max</p>
  </div>
  <div style={{ height:"150px", width: "150px", marginTop: "7px", backgroundColor: "white", borderRadius:"15px", paddingTop:"10px"}}>
    <p>sunrise & sunset</p>
  </div>
  <div style={{ height:"150px", width: "150px", marginTop: "7px", backgroundColor: "white", borderRadius:"15px", paddingTop:"10px"}}>
    <p>humidity</p>
  </div>
  <div style={{ height:"150px", width: "150px", marginTop: "7px", backgroundColor: "white", borderRadius:"15px", paddingTop:"10px"}}>
    <p>visibility</p>
  </div>
  <div style={{ height:"150px", width: "150px", marginTop: "7px", backgroundColor: "white", borderRadius:"15px", paddingTop:"10px"}}>
    <p>feels_like</p>
  </div>
 </div>
 </div>
    </div>
  )
};


export default App;
