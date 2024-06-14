import PropTypes from 'prop-types'
import { useDraggable } from '@dnd-kit/core'

const PlayerOption = ({ id, name, rate, image, x, y }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id
  })

  const style = {
    // position: 'absolute',
    // left: `${x}px`,
    // top: `${y}px`,
    transform: `translate3d(${transform?.x || 0}px, ${transform?.y || 0}px, 0)`,
    transition: 'transform 0.2s ease',
    zIndex: 1000
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className='flex justify-between items-center px-3 py-2 h-[4rem] w-[20rem] bg-slate-600'
    >
      <p className='text-white'>{name}</p>
      <p className='text-white'>{rate}</p>
      <img className='h-full' src={image} alt={name} />
    </div>
  )
}

PlayerOption.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default PlayerOption
