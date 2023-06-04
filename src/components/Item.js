import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const Item = (props) => {
  return (
    <>
    <div className="itemForSale">
   
      <h1>{props.name}</h1>
      <h2>${props.price}</h2>
      <img className = "itemPic" src={props.img} alt="just a pic"/>
      <p className = "desc">{props.description}</p>
    <div id = "add">
      
      <Fab  onClick = {() => props.addItem(props.id)} >
        <AddIcon />
      </Fab>
      </div>
     
      </div>

      
      
      
    </>
  )
}

export default Item