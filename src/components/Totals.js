import React from 'react'
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
import FakeTotal from './FakeTotal';

const Totals = (props) => {
  return (
    <>
    <Fade in= {true}>
    <h1 className = "total" > ${(props.total * 1.0625).toFixed(2)} 
   {props.total !== props.fakeTotal && <FakeTotal fakeTotalString = {props.fakeTotalString} />}</h1></Fade>
    </>
  )
}

export default Totals