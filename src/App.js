import './App.css';
import { useState } from 'react';
import itemsStart from "./assets/itemsForSale"
import Item from './components/Item';
import TheCart from './components/TheCart';
import OldCarts from './components/OldCarts';

function App() {
  const [itemsForSale, setItemsForSale] = useState(itemsStart)
  const [theCart, setTheCart] = useState([])
  const [total, setTotal] = useState(0)
  const [purchases, setPurchases] = useState([])

  const addItem = (itemIndex) => {

    setTheCart([...theCart, itemsForSale[itemIndex]])
    setTotal(total+itemsForSale[itemIndex].price)
    

  } 
  const removeItem = (itemIndex) => {
    let newCart = theCart.filter((value, index) => {
     return index !== itemIndex
    })
    setTheCart(newCart)
    setTotal(newCart.reduce((sum, item) => sum + item.price
    , 0))
  }
  class purchase {
    constructor(theOldCart){
      this.items= theOldCart
      this.total = "$" + (theOldCart.reduce((sum, item) => sum + item.price
      , 0)* 1.0625).toFixed(2)
      this.timeOfPurchase = new Date()
    }

  }
  const checkout = () => {
    let theOldCart = theCart
    let newPurchase = new purchase(theOldCart)
    let newPurchases = [...purchases, newPurchase]
    setPurchases(newPurchases)
    setTheCart([])
    setTotal(0)
 
  }
  

  return (
        <>
       
        {itemsForSale.map((value, index) => {
          return (
          <Item name={value.name} 
          price={value.price} 
          description = {value.description} 
          key={index}
          img={value.url}
          id = {index}
          addItem = {addItem}
          />
        )})}
        <TheCart 
          removeItem = {removeItem} 
          items = {theCart} 
          total= {total}
          checkout = {checkout}/>
        <ul>
          {purchases.map((value, index) => {
           return <OldCarts key = {index} oldCart = {value}/>
          })}
        </ul>

</>
  );
}

export default App;
