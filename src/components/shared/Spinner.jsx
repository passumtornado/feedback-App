import React from 'react'
import spinner from '../assets/spinner.gif'

const Spinner = () => {

  const inlinStyle = {
  width:"100px",
  margin:"auto",
  dispaly:"block",
//   justifyContent:"center",
//   alignItems:"center"
  }
  return <img src={spinner} 
  alt="loading...." 
  style={inlinStyle}/>
}

export default Spinner