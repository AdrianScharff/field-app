import PropTypes from 'prop-types'
import { useDroppable } from '@dnd-kit/core'
import FieldLines from './FieldLineComponents/FieldLines'

const Field = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id
  })

  return (
    <div
      ref={setNodeRef}
      className={`flex items-center justify-center relative h-[48.57rem] w-[70%] ${isOver ? 'bg-green-300' : 'bg-green-500'} border-8 border-white`}
    >
      <div className='z-10 flex flex-col gap-20'>
        {children}
      </div>
      <FieldLines />
    </div>
  )
}

Field.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node
}

export default Field
