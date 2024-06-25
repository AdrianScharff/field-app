import PropTypes from 'prop-types'
import { useDroppable } from '@dnd-kit/core'

const OptionsSection = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id
  })

  return (
    <div
      ref={setNodeRef}
      className={`flex justify-center h-[48.57rem] w-[30%] ${isOver ? 'bg-green-300' : 'bg-green-500'}`}
    >
      <ul className='flex flex-col gap-1 my-3 p-2 list-none'>{children}</ul>
    </div>
  )
}

OptionsSection.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node
}

export default OptionsSection
