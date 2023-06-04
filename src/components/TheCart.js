import { useAutocomplete } from '@mui/material'
import React, {useState, useEffect} from 'react'
import ItemInCart from './ItemInCart'
import Totals from './Totals'
import Fab from '@mui/material/Fab';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Zoom from '@mui/material/Zoom';

import Fade from '@mui/material/Fade';






const TheCart = (props) => {
    useEffect(() => {
        // This effect runs when the prop changes
        fakeTotalMaker(0);
      }, [props.total]);
    const [fakeTotal, setFakeTotal] = useState()
    const [fakeTotalString, setFakeTotalString] = useState(0)

    const fakeTotalMaker = (adjustment) => {
        let newFakeTotal = props.total + adjustment
        setFakeTotal(newFakeTotal)
        setFakeTotalString("$ " +(newFakeTotal * 1.0625).toFixed(2))
    }
    const myTrue = true
    const myStyle = {
        textDecoration: "line-through"
    }
   


  return (
    <>
    <div className = "theCart">
      {
          props.items.length>0 && <Totals fakeTotal = {fakeTotal} 
          fakeTotalString = {fakeTotalString} 
          total = {props.total} />
          }


      <div >
      <Zoom in = {props.items.length>0} >
        <ol>{props.items.map((value, index, array) => {
        return (
          
          <ItemInCart 
            key = {index} 
            item = {value} 
            fakeTotalMaker = {fakeTotalMaker} 
            removeItem = {props.removeItem}
            id = {index}
            />
            
        )})}
       
        </ol>  
        </Zoom>
         
           {props.items.length>0 && (
            <Zoom in = {props.items.length>0}>
            <Fab id = "checkout" onClick = {props.checkout}> 
            <ShoppingCartCheckoutIcon />
            </Fab> 
            </Zoom>
            )}
        </div>
         
    </div>
    </>
  )
}

export default TheCart