import Field from "./components/Field";
import PlayerOption from "./components/PlayerOption";

function App() {
  return (
    <Field>
      <PlayerOption
        name="Bastian Schweinsteiger"
        rate={99}
        image="https://images.hellomagazine.com/horizon/square/2a1b6ecec4ae-cristiano-ronaldo-toned-torso-sauna-selfie-t.jpg?tx=c_limit,w_360"
      />
    </Field>
  );
}

export default App;
