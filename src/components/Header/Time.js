import React,{useState} from  'react';



function  Time()  {
  setInterval(updateTime, 1000)

  const now = new Date().toLocaleTimeString();
  const [time, setTime] =useState(now)
 
  function updateTime(){
    const newTime=new Date().toLocaleTimeString();
    setTime(newTime);
  }
  
  return (
    <div>
      <h4 style={{color:"blue"}}>{time}</h4>
  </div>
  )
}

export default Time