import React from 'react'
import './Crypto.css'


function Coin({id, symbol, price, change24h, icon}) {
  return (
   
          <div className='coins'>
            <div className='coin-name'>
          <p className='coin-id'>{id}</p>
          <p className='coin-symbol'>({symbol})</p>
          </div>
            <p><strong>Coin price USD:</strong>{`  ${price}`}</p>
            <div className='coin-24'>
            <p><strong>Change 24h:</strong>{ `  ${change24h}`}</p>
            <p>{icon}</p>
            </div>
            </div>
        
      )
  
}

export default Coin