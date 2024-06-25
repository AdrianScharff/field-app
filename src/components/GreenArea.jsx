import PropTypes from 'prop-types'
import { useDroppable } from '@dnd-kit/core'
import { useEffect, useCallback, useRef } from 'react'

const GreenArea = ({ id, children, onRectChange }) => {
  const { setNodeRef, rect } = useDroppable({
    id
  })
  const nodeRef = useRef(null)

  const updateRect = useCallback(() => {
    if (rect && rect.current) {
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
        console.log('Green ref callback running')
        setTimeout(updateRect, 0)
      }}
      className='flex w-[105rem]'
    >
      {children}
    </div>
  )
}

GreenArea.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  onRectChange: PropTypes.func
}

export default GreenArea
