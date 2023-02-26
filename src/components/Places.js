import React from 'react'
import App from '../App'
import Data from './Data'
export default function Places(props)
{
    return(
<div className="container">
 <div class="row">
    <div class="col-2">
      <img  className="pl1--img"src={props.img}/>
    </div>
    <div class="col-9">
      
    <h5 className="loc--name"><img className="loc--img" src="./loc1.png"/> &nbsp; {props.loc}  &nbsp; <a className="link" href="www.google.com">view on google maps</a></h5>
    <h3 className='place--name'>{props.name}</h3>
    <h6 className="date">{props.date}</h6>
    <p className="about">{props.about}</p>

    </div>

    
  </div>
  <div className="line"><img src="./line.png"/></div>
</div>

    )
}