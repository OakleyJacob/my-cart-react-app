import React, { useState } from 'react'
import Fade from '@mui/material/Fade';


const ItemInCart = (props) => {
    const [hover, setHover] = useState(false)

    const handleEnter = () => {
        
        setHover(true)
        props.fakeTotalMaker(-props.item.price)
    }
    const handleExit = () => {
        setHover(false)
        props.fakeTotalMaker(0)
    }
    const myStyle = {
        textDecoration: "line-through"
    }
  return (
    <>
    <Fade in = {true}>
    <li 
        style = {hover?myStyle:null}
        onClick = {() => props.removeItem(props.id)}
         onMouseEnter= {handleEnter }
         onMouseLeave= {handleExit}> {props.item.name} $ {props.item.price} </li>
 
     </Fade>
   </>
  )
}

export default ItemInCart