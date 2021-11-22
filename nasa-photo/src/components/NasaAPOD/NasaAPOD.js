import React, { useEffect, useState } from "react";
import axios from 'axios'
import './NasaAPOD.css'
import { API_KEY ,BASE_URL } from '../../index'

function handleVideo(url) {
  return <iframe width="800" height="450" title="youtubeEmbed" src={url} />;
}
function handleImage(url) {
  return <img src={url} alt="NASA photograph" />;
}


function NasaAPOD() {

    const [data, setData] = useState([])
    
    useEffect(() => {
      axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      }).catch(err =>{
        console.log(err)
      })
    },[])

    
    const mediaDisplay =
    data.media_type === "video"
      ? handleVideo(data.url)
      : handleImage(data.url);
    
    
    return (
        
        <div className='app_body'>
            <div className='nasa_apod'>
                <h1>Nasa Astronomy Photo of the Day</h1>
                <h2>{data.title}</h2>
                <div>{mediaDisplay}</div>
                <h2>{data.date}</h2>
                <h3>{data.explanation}</h3>
                
            </div>
        </div>
        
  
  
    );
  }
  
  export default NasaAPOD;
  