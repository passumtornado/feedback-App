import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import {FaTimes,FaEdit} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({item}) => {
  const {feedbackDelete,editFeedback} = useContext(FeedbackContext)
   
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=>feedbackDelete(item.id)}>
      <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={()=>editFeedback(item)}>
      <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
FeedbackItem.prototypes = {
    item:PropTypes.object.isRequired,
}
export default FeedbackItem