import React, {useState} from 'react'

export const BMICalculatorApp = () => {
const [height, setHeight]=useState("");
const [weight, setWeight] = useState("");
const [bmiStatus, setBmiStatus] = useState("");
const [bmi, setBmi]= useState(null);
const [errorMessage, setErrorMessage] = useState("");
const calculateBmi = () => {
    if(height && weight){
        const heightInMeters= (height / 100);
        const bmiValue= weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));
        if(bmiValue < 18.5) {
            setBmiStatus("Underweight");
        } else if(bmiValue >= 18.5 && bmiValue < 24.9) {
setBmiStatus("Normal Weight");
        } else if(bmiValue>=25 && bmiValue < 29.9) {
            setBmiStatus("Overweight");
        } else {
            setBmiStatus("Obese");
        }
    }
    else{
        setBmi(null);
        setBmiStatus("invalid");
    }
}
  return (
    <>
    <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
            <h1>BMI Calculator</h1>
            <p className="error">{errorMessage}</p>
            <div className="input-container">
                <label htmlFor='height'>Heght (In cm) : </label>
                <input type='text' id='height' value={height} onChange={(e) =>{setHeight(e.target.value)}}/>
            </div>
            <div className="input-container">
                <label htmlFor='weight'>Weight (In Kg) : </label>
                <input type='text' id='weigtht'  value={weight} onChange={(e) =>{setWeight(e.target.value)}}/>
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            {bmi !== null &&(
<div className="result">
                    <p>Your BMI is: {bmi}</p><br />
                    <p>Status: {bmiStatus}</p>
                    </div>
            )}
                 
        </div>
    </div>
    </>
  )
}
