import React from 'react'
import { useEffect, useState } from 'react'

const Timer = ({setStop , questionNumber}) =>  {

    const [timer,setTimer]=useState(0);
     
    useEffect(()=>{
      if(timer === 30) return setStop(true);
        const interval =setInterval(()=>{
           setTimer((prev) => prev + 1);
                },1000);
                return()=>clearInterval(interval);
    },[setStop,timer]);


    useEffect(() => {
        setTimer(0);
    },[questionNumber])

  return timer;
}

export default Timer