import React, { useEffect, useState } from 'react'
import axios from "axios";
import './styles/currencyconvertercss.css';
const CurrencyConvertor = () => {
    const [amount, setAmount] = useState(1);
 const [fromCurrency, setFromCurrency] = useState("USD")
 const [toCurrency, setToCurrency] = useState("INR");
 const [convertedAmount, setConvertedAmount] = useState(null);
 const [exchangeRate, setExchangeRate] = useState(null);
 useEffect(()=> {
    const getExchangeRate= async ()=> {
        try{
            let url=`https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}
`;
            if(convertedAmount!==null)
                setConvertedAmount(null);
const response = await axios.get(url);
setExchangeRate(response.data.rates[toCurrency]);



        }
        catch(error){
            console.error("Error fetching exchange rate", error);
        }
    }
    getExchangeRate();
 }, [fromCurrency, toCurrency]);
 useEffect(() => {
    if(exchangeRate!==null){
  setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
}, [amount, exchangeRate]);
  return (
    <>
    <div className="currency-converter">
    <div className="box"></div>
    <div className="data">
        <h1>Currency Converter</h1>
        <div className="input-container">
            <label htmlFor="amt">Amount: </label>
            <input type="number" name="amount" id="amt" value={amount} onChange={(e) => {setAmount(parseFloat(Number(e.target.value)))}}/>
        </div>
        <div className="input-container">
            <label htmlFor='fromCurrency'></label>
            <select id='fromCurrency' value={fromCurrency} onChange={(e) => {setFromCurrency(e.target.value)}}>
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Sterling</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - -Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="INR">INR - Indian Rupees</option>
                <option value="BRL">BRL - Brazillian Real</option>
                <option value="ZAR">ZAR - South African Rand</option>
               
            </select>
        </div>
        <div className="input-container">
            <label htmlFor='toCurrency'></label>
            <select id='toCurrency' value={toCurrency} onChange={(e) => {setToCurrency(e.target.value)}}>
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Sterling</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - -Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="INR">INR - Indian Rupees</option>
                <option value="BRL">BRL - Brazillian Real</option>
                <option value="ZAR">ZAR - South African Rand</option>
            </select>
        </div>
        
        <div className="result">
            <p>{amount} in {fromCurrency} is equal to {convertedAmount} in {toCurrency}</p>
        </div>
    </div>
    </div>
    </>
  )
}
export default CurrencyConvertor;