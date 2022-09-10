import React from 'react';
import './Crypto.css';

function SingleNews({title, url, time, image, source, summary}) {
  return (
    <div className="container2">
       <div className="each-news">
        <img className= 'imgNews' src={image} width="150" height="150"/>
        </div>
        <div>
        <p className="title"> <a href={url}>{title}</a></p>
        <p><strong>Summary:</strong> {summary}</p>
        <p><strong>Source: </strong>{source}</p>
        <p><strong>Time:</strong> {time} </p>
        </div>
        </div>
  )
}

export default SingleNews