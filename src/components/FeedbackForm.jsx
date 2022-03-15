import { useState,useContext,useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import RatingSelected from './RatingSelected'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm(){
    const [text,setText]=useState('')
    const [rating,setRating]=useState(10)
    const [btnisDisabled,setBtnisDisabled] = useState(true)
    const [message,setMessage]= useState('')
    const {feedbackAdd,feedbackedit,updateFeedback} = useContext(FeedbackContext)

     useEffect(() => {
         if(feedbackedit.edit === true){
           setBtnisDisabled(false) 
           setText(feedbackedit.item.text)
           setRating(feedbackedit.item.rating)
         }
    }, [feedbackedit]);

    const handleTextChange = (e) =>{

        if(text === ""){
            setBtnisDisabled(true)
            setMessage(null)
        }else if(text !== "" && text.trim().length <= 10){
            setMessage("Text must be more than 10 characters")
            setBtnisDisabled(true)
        }else{
            setBtnisDisabled(false) 
            setMessage(null)
        }
        setText(e.target.value)
    }
    const handleSubmit = e =>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
            text,
            rating
        }
        if(feedbackedit.edit === true){
            updateFeedback(feedbackedit.item.id,newFeedback)
        }
        else{
         feedbackAdd(newFeedback)
        }
        
        }
        setText('')
    }
    return(
        <Card>
          <form onSubmit={handleSubmit}>
          <h2>How will you rate your Services With Us</h2>
          <RatingSelected select={(rating)=>setRating(rating)} />
          <div className="input-group">
          <input 
          type="text" 
          placeholder="Write a review"
          onChange={handleTextChange}
          value={text}
          />
          <Button type="submit" isDisabled={btnisDisabled}>
           Send
          </Button>
          </div>
          </form>
          <div className="">{message}</div>
        </Card>
    )
}

export default FeedbackForm