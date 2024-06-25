import PropTypes from 'prop-types'
import { useDroppable } from '@dnd-kit/core'
import { useEffect, useCallback, useRef } from 'react'

const OptionsSection = ({ id, children, onRectChange }) => {
  const { isOver, setNodeRef, rect } = useDroppable({
    id
  })
  const nodeRef = useRef(null)

  const updateRect = useCallback(() => {
    if (rect && rect.current) {
      console.log(rect.current.rect)
      onRectChange(rect.current.rect)
    }
  }, [rect, onRectChange])

  useEffect(() => {
    const handleResize = () => {
      if (nodeRef.current) {
        setNodeRef(nodeRef.current)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setNodeRef, updateRect])

  return (
    <div
      ref={(node) => {
        setNodeRef(node)
        nodeRef.current = node
        setTimeout(updateRect, 0)
      }}
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
