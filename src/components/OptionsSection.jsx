import React from 'react'
import PropTypes from 'prop-types'

const OptionsSection = ({ children }) => {
  return (
    <div className='relative flex justify-center h-[48.57rem] w-[30rem] bg-green-400'>
      <div className='flex flex-col gap-1 mt-3'>{children}</div>
    </div>
  )
}

OptionsSection.propTypes = {
  children: PropTypes.node
}

export default OptionsSection
