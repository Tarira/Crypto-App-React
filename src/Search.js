import React from 'react'
import './Crypto.css'

function Search({onInputChange}) {
  
  

  return (
    <div className="search-bar">
<form className="search-form">
    <label>Search</label>
    <input onChange = {onInputChange} 
    className="input">
</input>

</form>

    </div>
  )
}

export default Search