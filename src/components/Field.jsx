import PropTypes from 'prop-types'
import { useDroppable } from '@dnd-kit/core'
import FieldLines from './FieldLineComponents/FieldLines'

const Field = ({ children }) => {
  const { setNodeRef } = useDroppable({
    id: 'field'
  })

  return (
    <div
      ref={setNodeRef}
      className='flex items-center justify-center relative h-[48.57rem] w-[75rem] bg-green-300 border-8 border-white'
    >
      <FieldLines />
      <div className='absolute top-0 left-0 bg-blue-500'>Hello world</div>
    </div>
  )
}

Field.propTypes = {
  children: PropTypes.node
}

export default Field
