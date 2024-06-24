import PropTypes from 'prop-types'
import { useDroppable } from '@dnd-kit/core'
import { useEffect } from 'react'

const OptionsSection = ({ id, children, onRectChange }) => {
  const { isOver, setNodeRef, rect } = useDroppable({
    id
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (rect && rect.current) {
        console.log('OptionsSection rect:', rect.current.rect)
        onRectChange(rect.current.rect)
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [rect, onRectChange])

  return (
    <div
      ref={setNodeRef}
      className={`flex justify-center h-[48.57rem] w-[30rem] ${isOver ? 'bg-green-300' : 'bg-green-500'}`}
    >
      <ul className='flex flex-col gap-1 my-3 p-2 list-none'>{children}</ul>
    </div>
  )
}

OptionsSection.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  onRectChange: PropTypes.func.isRequired
}

export default OptionsSection
