import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Coin from './Coin'
import Search from './Search'
import { AiOutlineArrowUp, AiOutlineArrowDown} from "react-icons/ai";


function Cryptolist () {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState('');
  const [showMore, setShowmore] = useState(true);
  const [searching, setSearching] = useState(null);
  useEffect(() =>
  async function getCrypto() {
    const response = await axios.get('https://api.coincap.io/v2/assets');
    const coins = await response.data.data
    
  setData(coins.map((coin => { return{
   ID:coin.id, Symbol:coin.symbol, Price:coin.priceUsd, Change24h: coin.changePercent24Hr}
  })))
  

  },[data,term])
 
  
  return (
    <>
    <Search onInputChange = {(e) => {e.preventDefault(); setTerm(e.target.value); term ? setSearching(true): setSearching(false)}}/>
      <div className='gridContainer'>
    {searching && !term == ' ' ? data.filter(item => item.ID.toLowerCase() === term.toLowerCase() || item.Symbol.toLowerCase() === term.toLowerCase()).map((term )=> { return (
      <Coin symbol= {term.Symbol}  id= {term.ID.toUpperCase()}  price= {Math.round (term.Price*100)/100} change24h= {Math.round(term.Change24h*100)/100} icon = {term.Change24h > 0 ? <AiOutlineArrowUp style={{color:'green'}}/> : <AiOutlineArrowDown style={{color:'red'}}/>}/>
      )}) : data.slice(0, showMore ? 9 : 100).map((item) => { 
      return (
      <Coin symbol= {item.Symbol} id= {item.ID.toUpperCase()}  price= {Math.round (item.Price*100)/100} change24h = {Math.round(item.Change24h*100)/100} icon = {item.Change24h > 0 ? <AiOutlineArrowUp style={{color:'green'}}/> : <AiOutlineArrowDown style={{color:'red'}}/>}/>
      )
    })}</div>
    {!searching ? <div className="more">
      <button className='moreBttn' onClick={() => {showMore? setShowmore(false) : setShowmore(true)}}>{showMore ? 'Show more coins' : 'Show less coins'}</button></div> : null
}
    </>
  )
  

}

export default Cryptolist