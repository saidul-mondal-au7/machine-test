import React, {useState} from 'react';

import './App.css';

function App() {
  const [otp, setOtp] = useState(new Array(4).fill(""))

  const handleChange = (element, index) => {
    if(isNaN(element.value)) return false ;

    setOtp([...otp.map((d, idx) => idx === index ? element.value : d)])

    if(element.nextSibling){
      element.nextSibling.focus()
    }
  };

  return (
    <div className="box">
    <div className="App">
      <h1>OTP-Mchine Test</h1>
      {otp.map((data, index) => {
         return( <input 
           className="Otp"
           type="text" 
           name="otp"
           maxLength="1" 
           key={index} 
           value={data}
           onChange={(e) => handleChange(e.target, index) } 
           onFocus={(e) => e.target.select()}
            />)
      })}
      <br />
      <button className="button" onClick={(e) => alert("Entered otp is " + otp.join(""))}>
        Verify
      </button>
     <button className="clearOtp" onClick={(e) => setOtp([...otp].map(v => ""))}> Clear</button>
       
    </div>
    </div>
  );
}

export default App;
