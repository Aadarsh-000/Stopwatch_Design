import React from 'react'
import './Digits.css';
const Digits = () => {
   
  const hr = 0;
  const min = 0;
  const sec = 0;
  const timer = false;

  const start = () => {
      timer = true;
      stopwatch();
  }

  const stopp = () => {
      timer = false;
  }

  const reset = () => {

  }

  const stopwatch = () => {
      if(timer == true){
        sec = sec + 1;


        document.getElementById("sec").innerHTML = sec;
        setTimeout("stopwatch()" , 10);
      }
  }

  return (
    <div>
        <div id='main'>
            <div id='clockdigit'>
                <span className='digit a'>00</span>
                <span className='txt a'>hr</span>
                <span className='digit a'>00</span>
                <span className='txt a' >min</span>
                <span className='digit a' id='sec'>00</span>
                <span className='txt a' >sec</span>
            </div>
            <div id='buttons-container'>
                <button className='btn' id='start' onClick={start}>Start</button>
                <button className='btn' id='stop' onClick={stopp}>Stop</button>
                <button className='btn' id='reset' onClick={reset}>Reset</button>
            </div>
        </div>

    </div>
  )
}

export default Digits