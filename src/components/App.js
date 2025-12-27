
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [nums, setNums] = useState([]);
  const [curr, setCurr] = useState('');
  const [sum, setSum] = useState(0);

  useEffect(()=>{

    const timer = setTimeout(()=>{
      const total = nums.reduce((acc,curr) => acc+curr, 0);
      setSum(total);
    },0);

    return () => clearTimeout(timer);
    
  },[nums]);


  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setCurr(value);

    if(!isNaN(value)){
        setNums(prev => [...prev, value]);
    }
  }

  return (
    <div>
        <h1>Sum Calculator</h1>
        <input type="number" value={curr} onChange={handleChange} placeholder="Enter a number"/>
        {
          nums.length > 0 && (
            <p>Sum: {sum}</p>
          )
        }
    </div>
  )
}

export default App
