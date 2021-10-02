import './App.css';
import Gameboard from './components/Gameboard';
import './STYLES/Global.scss'
function App() {
  
  return (
    <div className="container">
    <h1>TIC TOE GAME</h1>
    <Gameboard  />
    {/* update={()=>{update()}} */}
    </div>
  );
}

export default App;

