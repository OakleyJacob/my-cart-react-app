import Fade from '@mui/material/Fade';
import React from 'react'

const FakeTotal = (props) => {
  return (
    <Fade in = {true}>
    <span className="fakeTotal">{props.fakeTotalString}</span>
    </Fade>
  )
}

export default FakeTotal