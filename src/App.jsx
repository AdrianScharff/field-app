import { useState } from 'react'
import Field from './components/Field'
import PlayerOption from './components/PlayerOption'
import { DndContext } from '@dnd-kit/core'
import FieldBackground from './components/FieldBackground'
import OptionsSection from './components/OptionsSection'

function App () {
  const [players, setPlayers] = useState([
    { id: '1', name: 'Toni Kroos', rate: 99.9, image: 'https://images.hellomagazine.com/horizon/square/2a1b6ecec4ae-cristiano-ronaldo-toned-torso-sauna-selfie-t.jpg?tx=c_limit,w_360', x: 0, y: 0 },
    { id: '2', name: 'Mesut Özil', rate: 98, image: 'https://images.hellomagazine.com/horizon/square/2a1b6ecec4ae-cristiano-ronaldo-toned-torso-sauna-selfie-t.jpg?tx=c_limit,w_360', x: 0, y: 0 }
  ])

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (over) {
      const dropX = over.rect.left
      const dropY = over.rect.top

      setPlayers((players) =>
        players.map((player) =>
          player.id === active.id ? { ...player, x: dropX, y: dropY } : player
        )
      )
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <FieldBackground>
        <Field />
        <OptionsSection>
          {players.map((player) => (
            <PlayerOption
              key={player.id}
              id={player.id}
              name={player.name}
              rate={player.rate}
              image={player.image}
              x={player.x}
              y={player.y}
            />
          ))}
        </OptionsSection>
      </FieldBackground>
    </DndContext>
  )
}

export default App
