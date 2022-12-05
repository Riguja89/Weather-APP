import React from 'react';
import './Ciudad.css';
import { useHistory } from 'react-router-dom';


export default function Ciudad({ciudad}) {
    let history = useHistory();
    
    let back = e => {
        e.stopPropagation();
        history.goBack();
      };
     
      //console.log(ciudad);
     

  return (
    <div onClick={back}
     style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.3)"
      }}>
    

     <div className='ciudad' >
     <h1> {ciudad.name} </h1>  
      <div className='contenedor'>
     <div className='col1'>
         <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+ciudad.img+"@4x.png"} alt="" />
         <div className='temp'>
        <p>{ciudad.weather[0].toUpperCase()+ciudad.weather.slice(1,ciudad.weather.length)}</p>
     </div>
         <div className='temp'>
        <p>Min: {ciudad.min}°c</p>
     </div>

     <div className='temp'>
     <p>Max: {ciudad.max}°c</p>
     </div>

      </div>
       <div className='col2'>
     <div className='temp'>
        <p>Temperatura actual: {ciudad.temp}°c</p>
     </div>
    
     <div className='temp'>
        <p>{ciudad.clouds}% nublado</p>
     </div>
     <div className='temp'>
        <p>Velocidad de Viento: {ciudad.wind} Km/h</p>
     </div>
     <div className='temp'>
        <p>Presion: {ciudad.pres} Pa</p>
     </div>
     <div className='temp'>
        <p>Humedad Relativa: {ciudad.hum}%</p>
     </div>
     <div className='temp'>
      <p>
      Latitud: {ciudad.latitud}, Longitud: {ciudad.longitud}
      </p>         
     </div>
     </div> 
        </div>   
        </div>
        
    </div>


  );
}