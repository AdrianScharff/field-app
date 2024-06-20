import PropTypes from 'prop-types'

const GoalAreaLines = ({ borderSide }) => {
  return (
    <div className={`h-[12rem] w-[7rem] bg-transparent border-y-8 ${borderSide === 'r' ? 'border-r-8' : 'border-l-8'} border-white`} />
  )
}

GoalAreaLines.propTypes = {
  borderSide: PropTypes.string.isRequired
}

export default GoalAreaLines
