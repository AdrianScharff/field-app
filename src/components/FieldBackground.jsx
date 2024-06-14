import React from 'react'
import PropTypes from 'prop-types'

const FieldBackground = ({ children }) => {
  return (
    <div className='flex items-center justify-center h-screen bg-slate-600'>
      {children}
    </div>
  )
}

FieldBackground.propTypes = {
  children: PropTypes.node
}

export default FieldBackground
