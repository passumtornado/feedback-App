import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = ({handleDelete}) => {
    const {feedback} = useContext(FeedbackContext)
    if(!feedback || feedback.length === 0){
        return <p>No Feedback available</p>
    }
  return (
    <>
    {
        feedback.map((item,index)=>(
            <FeedbackItem 
            key={item.id} 
            item={item}
            handleDelete={handleDelete}
            />
        ))
    }
    </>
  )
}


export default FeedbackList