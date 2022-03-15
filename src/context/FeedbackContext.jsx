import {v4 as uuidv4} from "uuid"
import {createContext,useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider =({children})=>{
    const [feedback,setFeedback] = useState([
        {
        id:1,
        text:'this is feedback item 1',
        rating:10
       },
          {
        id:2,
        text:'this is feedback item 2',
        rating:9
       },
          {
        id:3,
        text:'this is feedback item 3',
        rating:7
       }
     ])
     const [feedbackedit,setfeedbackEdit] = useState({
         item:{},
         edit:false
     })
        // Add feedback
        const feedbackAdd = (newFeedback) =>{
                newFeedback.id =uuidv4()
                setFeedback([newFeedback,...feedback])
            }
        // Delete Feedback
        const feedbackDelete = (id) => {
            if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
            }
        };
        // Edit feedback
        const editFeedback = (item) =>{
            setfeedbackEdit({
                item,
                edit:true
            })
        }

        //update feedback
        const updateFeedback = (id,upItem)=>{
            setFeedback(feedback.map((item)=>(item.id === id ? 
            {...item,...upItem}:item)))
        }

    return <FeedbackContext.Provider
           value={
               {
                feedback,
                feedbackedit,
                feedbackAdd,
                feedbackDelete,
                editFeedback,
                updateFeedback,
            }
           }
         >
           {children}
      </FeedbackContext.Provider>

}

export default FeedbackContext;