import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';
import './App.css';

function App() {
  return (
    <div className="app">  {/* ← This MUST be here */}
      <CharacterCounter 
        minWords={50}
        maxWords={500}
        targetReadingTime={3}
      />
    </div>
  );
}


export default App;
