import React from 'react'
import PropTypes from 'prop-types'

const Card = ({children,reverse}) => {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
    {children}
    </div>
  )
}

Card.defualtProps = {
    reverse:false,
}
Card.propTypes = {
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool,
}
export default Card