import {v4 as uuidv4} from "uuid"
import {createContext,useState,useEffect} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider =({children})=>{
    const [isLoading,setIsLoading] = useState(true)
    const [feedback,setFeedback] = useState([])
     const [feedbackedit,setfeedbackEdit] = useState({
         item:{},
         edit:false
     })
      useEffect(()=>{
        fetchData()
      },[])
      // fetch Data
        const fetchData = async () =>{
            const response = await fetch(`/feedback?_sort=id&_order=desc`)

            const data = await response.json()
            setFeedback(data)
            setIsLoading(false)
        }
        // Add feedback
        const feedbackAdd = async (newFeedback) =>{
               const response = await fetch(`/feedback`,{
                   method:'POST',
                   headers:{
                       "Content-Type":"application/json"
                   },
                   body:JSON.stringify(newFeedback)
               })
               const data = await response.json()
            
                setFeedback([data,...feedback])
            }
        // Delete Feedback
        const feedbackDelete = async (id) => {
            if (window.confirm("Are you sure you want to delete?")) {
              await fetch(`/feedback/${id}`,{method:'DELETE'})
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
        const updateFeedback = async (id,upItem)=>{
              const response = await fetch(`/feedback/${id}`,{
                   method:'PUT',
                   headers:{
                       "Content-Type":"application/json"
                   },
                   body:JSON.stringify(upItem)
               })
               const data = await response.json()
            setFeedback(feedback.map((item)=>(item.id === id ? 
            {...item,...data}:item)))
        }

    return <FeedbackContext.Provider
           value={
               {
                feedback,
                feedbackedit,
                isLoading,
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