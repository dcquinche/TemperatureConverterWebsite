import './styles.css'
import {useState} from "react";

function TemperatureConverter(){
    const [inputNum, setInputNum] = useState(0);
    const [result, setResult] = useState();
    const [convertOpt, setConvertOpt] = useState();

    const handleChangeNum = (event) => {
        setInputNum(event.target.value);
    }

    const handleChangeOpt = (event) => {
        setConvertOpt(event.target.value);
    }

    const handleCorvertion = () => {
        if(convertOpt === "fahrenheit"){
            let formula = (inputNum - 32) * (5/9)
            formula = formula.toFixed([4])
            setResult(`${formula} °C`)
        } else {
            let formula = (inputNum * (9/5)) + 32
            formula = formula.toFixed([4])
            setResult(`${formula} °F`)
        }
    }

    return (
        <div id="main">
            <div className="container">
                <label for="number">Degrees</label>
                <input type="number" onChange={handleChangeNum} />
            </div> 

            <div className="container">
            <label for="temperatureType">Type</label>
            <select id='temperatureType' onChange={handleChangeOpt}>
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
            </select>
            </div> 

            <div className='container'>
                <button type='submit' onClick={handleCorvertion}>Convert</button>
            </div>
            
            <div className='container'>
                <p>Result:</p>
                <p><span>{result}</span></p>
            </div>
        </div>   
    )
}

export default TemperatureConverter;