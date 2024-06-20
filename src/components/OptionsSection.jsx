import PropTypes from 'prop-types'

const OptionsSection = ({ children }) => {
  return (
    <div className='flex justify-center h-[48.57rem] w-[30rem] bg-green-500'>
      <ul className='flex flex-col gap-1 mt-3'>{children}</ul>
    </div>
  )
}

OptionsSection.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node
}

export default OptionsSection
