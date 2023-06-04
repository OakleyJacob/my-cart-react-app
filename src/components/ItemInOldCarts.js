import React from 'react'
import Fade from '@mui/material/Fade';


const ItemInOldCarts = (props) => {
  return (
    <Fade in = {true}>
    <div className = "oldCartItem">{props.item}
    <span style = {{ float: 'right'}} > 
        { " Qty: "+props.qty}</span></div>
    </Fade>
  )
}

export default ItemInOldCarts