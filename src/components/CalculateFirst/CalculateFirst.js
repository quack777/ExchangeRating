import React, {useEffect, useState} from "react";
import client from '../../lib/api/client'
import SetNumberFormat from '../../utils/SetNumberFormat'
import './CalculateFirst.css'

const CalculateFirst = () => {
    const [exchangeRate, setExchangeRate] = useState('')
    const [userChoice, setUserChoice] = useState('KRW');
    const [money,setMoney] = useState();
    const [click, setClick] = useState(false);

    useEffect(()=>{
        setClick(false)
        client.get(process.env.REACT_APP_API_URL,{params: {access_key: process.env.REACT_APP_API_KEY}})
                .then((res)=>setExchangeRate(res.data.quotes))
                .catch((err)=>console.dir(err))
    },[userChoice,money]) //사용자가 값을 바꿀때마다 리렌더링

    const handleClick=(e)=>{
        e.preventDefault();
        if (money <0 || money > 10000 || money === '' || money === NaN){
            console.log(money)
            alert("송금액이 바르지 않습니다")
            setClick(false)
        }else{
            setClick(true);
        }
    }

  return(
    <div className = 'FirstCalculator-container'>
        <p className = 'first-title'>환율 계산</p>
        <form className = 'first-form' onSubmit={handleClick}>
          <p>송금국가 : 미국(USD)</p>
          <div>수취국가 :
              <select onChange={(event)=>setUserChoice(event.target.value)}>
                  <option value="KRW">한국(KRW)</option>
                  <option value="JPY">일본(JPY)</option>
                  <option value ="PHP">필리핀(PHP)</option>
              </select>
          </div>
            <p>
                환율: {exchangeRate[`USD${userChoice}`]} {userChoice}/USD
            </p>
            <p>
                송금액: <input type = 'number' onChange={(event)=>setMoney(event.target.value)}/> USD
            </p>
            <button className='first-btn' type='submit'>Submit</button>
        </form>
            {click? <div className='first-res'>수취금액은 {SetNumberFormat(money*exchangeRate[`USD${userChoice}`])} {userChoice}입니다</div> : ''}
    </div>
  )
};

export default CalculateFirst;