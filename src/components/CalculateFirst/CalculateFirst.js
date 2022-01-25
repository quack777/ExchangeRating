import React, {useEffect, useState} from "react";
import SetNumberFormat from '../../utils/SetNumberFormat'
import { getApiOfExchangeRate } from "../../api/GetApi.js";
import './CalculateFirst.css'

const CalculateFirst = () => {
    const [exchangeRate, setExchangeRate] = useState('')
    const [userChoice, setUserChoice] = useState('KRW');
    const [sendMoney,setSendMoney] = useState();
    const [isSubmit, setIsSubmit] = useState(false);

    const handleResultOfFirstCalculator=(e)=>{
        e.preventDefault();
        setSendMoney(e.target[1].value)
        let tmpMoney = e.target[1].value;
        if (tmpMoney >=0 && tmpMoney <= 10000){
            setIsSubmit(true);
        }else{
            alert("송금액이 바르지 않습니다")
            setIsSubmit(false)
        }
        e.target[1].value = ''
    }

    useEffect(()=>{
        setIsSubmit(false)
        getApiOfExchangeRate("USD")
            .then((res)=>setExchangeRate(res.data.quotes))
            .catch((err)=>console.dir(err))
    },[userChoice]) 

    return(
    <div className = 'FirstCalculator-container'>
        <form className = 'first-form' onSubmit={handleResultOfFirstCalculator}>
            <p className = 'first-title'>환율 계산</p>
            <p>송금국가 : 미국(USD)</p>
            <div>수취국가 :
              <select onChange={(event)=>setUserChoice(event.target.value)}>
                  <option value="KRW">한국(KRW)</option>
                  <option value="JPY">일본(JPY)</option>
                  <option value ="PHP">필리핀(PHP)</option>
              </select>
              </div>
                <p>
                    환율: {exchangeRate && SetNumberFormat(exchangeRate[`USD${userChoice}`])} {userChoice}/USD
                </p>
                <p>
                    송금액: <input/> USD
                </p>
                <button className='first-btn' type='submit'>Submit</button>
            </form>
                {isSubmit? <div className='first-res'>수취금액은 {exchangeRate && SetNumberFormat(sendMoney*exchangeRate[`USD${userChoice}`])} {userChoice}입니다</div> : ''}
        </div>
  )
};

export default CalculateFirst;