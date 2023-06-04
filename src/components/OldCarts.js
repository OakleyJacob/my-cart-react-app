import React, { useEffect, useState} from 'react'
import Fade from '@mui/material/Fade';
import ItemInOldCarts from './ItemInOldCarts';
import Time from './Time';


const OldCarts = (props) => {
    const [isHover, setIsHover] = useState(false)
    const [collapsedCart, setCollapsedCart] = useState([])
    const {timeOfPurchase: date} = props.oldCart

    const handleEnter = () => {
        setIsHover(true)
        cartCollapser(props.oldCart.items)
    }
    const handleExit = () => {
        setIsHover(false)
        
    }
    class collapsedPurchase {
        constructor(name, qty){
            this.name = name
            this.qty = qty
        }
    }
    const cartCollapser = (cart) => {
        let collapsedCartItems = []
        
        cart.map((item) => {
            if (collapsedCartItems.some(value => value.name === item.name)){
                let targetIndex
                let theItemToIncrease = collapsedCartItems.filter((value, index) => {
                    targetIndex = index
                    return value.name === item.name})
                    collapsedCartItems[targetIndex] = new collapsedPurchase(collapsedCartItems[targetIndex].name, collapsedCartItems[targetIndex].qty+1)
            
            }else {
                let smolPurchase = new collapsedPurchase(item.name, 1)
                collapsedCartItems.push(smolPurchase)
            }
            
        })
        setCollapsedCart(collapsedCartItems);
   
    }


  return (
    <>
    <div className = "oldCarts" 
        onMouseEnter = {handleEnter}
        onMouseLeave = {handleExit}>


    < h1 className = "oldCartsTotal">{props.oldCart.total}</h1>


    {isHover?collapsedCart.map((value, index) => {
        return <li style = {{listStyle : 'none'}}key = {index} > <ItemInOldCarts item = {value.name} qty = {value.qty} key = {index} /></li>
    }):
        <Time date = {date}/>
}

    
    </div>
    </>
  )
}

export default OldCarts