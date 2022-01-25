import React, {useEffect, useState} from "react";
import SetNumberFormat from '../../utils/SetNumberFormat'
import GetApi from "../../utils/GetApi";
import './CalculateFirst.css'

const CalculateFirst = () => {
    const [exchangeRate, setExchangeRate] = useState('')
    const [userChoice, setUserChoice] = useState('KRW');
    const [money,setMoney] = useState();
    const [click, setClick] = useState(false);

    useEffect(()=>{
        setClick(false)
        GetApi(money,"USD")
            .then((res)=>setExchangeRate(res.data.quotes))
            .catch((err)=>console.dir(err))
    },[userChoice]) //사용자가 값을 바꿀때마다 리렌더링

    const handleClick=(e)=>{
        e.preventDefault();
        setMoney(e.target[1].value)
        let tmpMoney = e.target[1].value;
        if (tmpMoney >=0 && tmpMoney <= 10000){
            setClick(true);
        }else{
            alert("송금액이 바르지 않습니다")
            setClick(false)
        }
        e.target[1].value = ''
    }

  return(
    <div className = 'FirstCalculator-container'>
        <form className = 'first-form' onSubmit={handleClick}>
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
                    환율: {SetNumberFormat(exchangeRate[`USD${userChoice}`])} {userChoice}/USD
                </p>
                <p>
                    송금액: <input/> USD
                </p>
                <button className='first-btn' type='submit'>Submit</button>
            </form>
                {click? <div className='first-res'>수취금액은 {SetNumberFormat(money*exchangeRate[`USD${userChoice}`])} {userChoice}입니다</div> : ''}
        </div>
  )
};

export default CalculateFirst;