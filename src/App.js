
import { useState } from 'react';
import './App.css';

function App() {
 const [counter, setCounter] = useState(0);
 const [ step, setStep] = useState(1)
 const [input, setInput] = useState('')


 // count icreament
 function increament(){
  
  if(input >= 0){
    setInput(parseInt(input)+1)
    setCounter(input)

  }
 }

 // count icreament
 function dicreament(){
  

  if(input >= 1 ){
    setInput(parseInt(input)-1)
    setCounter(input)
  }
 }


 // step icreament
 function stepIncreament(e){

  
    setStep(e.target.value)


 }




  return (
    <div className="mainBox" style={{display: "flex",flexDirection: "column", justifyContent: "center",alignItems: "center", padding: "200px 0px",gap: "10px",textTransform: "capitalize" }}>

      <CounterBtn countInc={increament} countDic={dicreament} countValue={counter}  stepInc={stepIncreament} stepValue={step} inputvalue={input} setInputValue={setInput}/>
      </div>
  );
}


// counter button
function CounterBtn({countInc, countDic, countValue, stepInc, stepValue, inputvalue, setInputValue}){
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const date = new Date();

  const getMonth = months[date.getMonth()];
  const getDays = weekDays[date.getDay()];
  const getDate = date.getDate();
  const getYear = date.getFullYear();
  
  return(
    <div style={{backgroundColor: "rgb(47, 47, 47)", padding:"30px 10px", color: "white", minWidth: "300px", textAlign: "center"}}>
     
  <div style={{display:"flex", justifyContent:"center", gap:"5px"}}> 
      
       <input type='range' min="0" max="20" onChange={stepInc} style={{accentColor: "rgb(72, 172, 226)", marginTop:"6px"}}/> <h3>: {stepValue}</h3>
 </div>
    
  <div style={{ display: "flex", justifyContent:"space-around", marginTop:"10px"}}> 
        <button style={{width: "60px", color: "white", backgroundColor: "rgb(72, 172, 226)",fontSize: "18px", cursor: "pointer", border: "none",}} onClick={countDic}>-</button><input type='number' value={inputvalue} onChange={(e)=> setInputValue(e.target.value) }  />
        <button style={{width: "60px", color: "white", backgroundColor: "rgb(72, 172, 226)",fontSize: "18px", cursor: "pointer", border: "none",}} onClick={countInc}>+</button>

 </div>


 <div>
  
{inputvalue === '' ? <p>today is {getDays} {getMonth} {getDate} {getYear}</p> : <p>{inputvalue * stepValue} days from today is {getDays} {getMonth} {getDate} {getYear}</p>}
 </div>
 </div>
  );
}


export default App;