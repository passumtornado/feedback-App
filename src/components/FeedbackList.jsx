import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

const FeedbackList = ({handleDelete}) => {
    const {feedback,isLoading} = useContext(FeedbackContext)
    if(!isLoading && (!feedback || feedback.length === 0)){
        return <p>No Feedback available</p>
    }

    return isLoading ? <Spinner /> : (
         
        feedback.map((item,index)=>(
            <FeedbackItem 
            key={item.id} 
            item={item}
            handleDelete={handleDelete}
            />
        ))
     )
 
}


export default FeedbackList