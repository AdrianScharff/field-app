import { useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import PlayerOption from './components/PlayerOption'
import Field from './components/Field'
import FieldBackground from './components/FieldBackground'
import OptionsSection from './components/OptionsSection'

function App () {
  const playersArray = [
    { id: 1, name: 'Toni Kroos', rate: 99.9, image: 'https://images.hellomagazine.com/horizon/square/2a1b6ecec4ae-cristiano-ronaldo-toned-torso-sauna-selfie-t.jpg?tx=c_limit,w_360' },
    { id: 2, name: 'Mesut Özil', rate: 98, image: 'https://images.hellomagazine.com/horizon/square/2a1b6ecec4ae-cristiano-ronaldo-toned-torso-sauna-selfie-t.jpg?tx=c_limit,w_360' },
    { id: 3, name: 'Karim Benzema', rate: 97.5, image: 'https://images.hellomagazine.com/horizon/square/2a1b6ecec4ae-cristiano-ronaldo-toned-torso-sauna-selfie-t.jpg?tx=c_limit,w_360' },
    { id: 4, name: 'Rio Ferdinand', rate: 99, image: 'https://images.hellomagazine.com/horizon/square/2a1b6ecec4ae-cristiano-ronaldo-toned-torso-sauna-selfie-t.jpg?tx=c_limit,w_360' }
  ]

  const [optionPlayers, setOptionPlayers] = useState(playersArray)
  const [fieldPlayers, setFieldPlayers] = useState([])
  const [optionsRect, setOptionsRect] = useState(null)

  const handleRectChange = (newRect) => {
    setOptionsRect(newRect)
  }

  function restrictToBoundingRect (transform, rect, boundingRect) {
    const value = {
      ...transform
    }

    if (rect.top + transform.y <= boundingRect.top) {
      value.y = boundingRect.top - rect.top
    } else if (rect.bottom + transform.y >= boundingRect.top + boundingRect.height) {
      value.y = boundingRect.top + boundingRect.height - rect.bottom
    }

    if (rect.left + transform.x <= boundingRect.left) {
      value.x = boundingRect.left - rect.left
    } else if (rect.right + transform.x >= boundingRect.left + boundingRect.width) {
      value.x = boundingRect.left + boundingRect.width - rect.right
    }

    return value
  }

  const restrictToDroppables = ({ draggingNodeRect, transform }) => {
    if (!draggingNodeRect || !optionsRect) {
      return transform
    }

    return restrictToBoundingRect(transform, draggingNodeRect, optionsRect)
  }

  const handleDragEnd = (event) => {
    const { active, over } = event
    const activePlayer = playersArray.find(player => player.id === active.id)
    if (over && over.id === 'field' && !fieldPlayers.some(player => player.id === active.id)) {
      setOptionPlayers(players => players.filter(player => player.id !== active.id))
      setFieldPlayers(players => [...players, activePlayer])
    } else if (over && over.id === 'options-section' && !optionPlayers.some(player => player.id === active.id)) {
      setOptionPlayers(players => [...players, activePlayer])
      setFieldPlayers(players => players.filter(player => player.id !== active.id))
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToDroppables]}>
      <FieldBackground>
        <Field id='field'>
          {fieldPlayers.map(player => (
            <PlayerOption
              key={player.id}
              id={player.id}
              name={player.name}
              rate={player.rate}
              image={player.image}
            />
          ))}
        </Field>
        <OptionsSection id='options-section' onRectChange={handleRectChange}>
          {optionPlayers.map(player => (
            <PlayerOption
              key={player.id}
              id={player.id}
              name={player.name}
              rate={player.rate}
              image={player.image}
            />
          ))}
        </OptionsSection>
      </FieldBackground>
    </DndContext>
  )
}

export default App
