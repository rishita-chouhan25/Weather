const inputBox = document.querySelector('.input-box');
const seachBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity')
const wind_speed = document.getElementById('wind-speed')
const no_data_section = document.getElementById('no-data-section')
const data_section = document.getElementById('data-section')
const loading = document.getElementById('loading');

 
      data_section.style.display="none"
      loading.style.display="none"

async function checkweather(city){
   loading.style.display="inline-block"
   no_data_section.style.display="none"
    
   if(city){
      
     
      const api_key = "dd2807461758bfc8ad5e39d3068bbd24"
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ api_key}`;
 
      
 
      const weather_data = await fetch(`${url}`).then(Response => Response.json());
      if(weather_data){
         loading.style.display="none";
          data_section.style.display = "flex"
      }
 
      console.log(weather_data.weather[0].main.toLowerCase());
 
      temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
      description.innerHTML = `${weather_data.weather[0].description}`;
      humidity.innerHTML = `${weather_data.main.humidity}%`;
      wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
 
     console.log('text', weather_data.weather[0].main.toLowerCase() )
 
      switch( weather_data.weather[0].main.toLowerCase() ){
 
         case 'clouds':
          document.getElementById('image').src = "/images/cloudy-sky.webp";
             break;
          case 'clear':
             document.getElementById('image').src= "/images/clear.png";
             break;
          case 'mist':
             document.getElementById('image').src= "/images/mist.jpg";
             break;
          case 'rain':
             document.getElementById('image').src= "/images/rain.png";
             break;
          case 'sun':
             document.getElementById('image').src= "/images/sun.png";
             break;
          case 'snow':
             document.getElementById('image').src = "/images/cloud-rain-thunderstorm.webp";
             break;
          default :
          document.getElementById('image').src = "/images/cloud.png";
 
          
 
      } 
   }
   else{
    
      data_section.style.display="none"
      loading.style.display="none";
       

      alert('Please enter city to know the weather!!')
      no_data_section.style.display="flex"
   }

}
seachBtn.addEventListener('click', ()=>{
    checkweather(inputBox.value);
});