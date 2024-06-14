import PropTypes from 'prop-types'

const PenaltyAreaLines = ({ borderSide }) => {
  return (
    <div className={`h-[29rem] w-[13rem] bg-transparent border-y-8 border-${borderSide}-8 border-white`} />
  )
}

PenaltyAreaLines.propTypes = {
  borderSide: PropTypes.string.isRequired
}

export default PenaltyAreaLines
