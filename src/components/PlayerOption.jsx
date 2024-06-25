import PropTypes from 'prop-types'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

const PlayerOption = ({ id, name, rate, image }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id
  })

  const style = {
    transform: CSS.Translate.toString(transform)
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className='flex justify-between items-center px-3 py-2 h-[4rem] w-[15rem] 2xl:w-[20rem] bg-slate-600 z-40'
    >
      <p className='text-white'>{name}</p>
      <p className='text-white'>{rate}</p>
      <img className='h-full' src={image} alt={name} />
    </div>
  )
}

PlayerOption.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

export default PlayerOption
