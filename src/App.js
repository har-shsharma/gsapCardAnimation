
import './App.css';
import Animation from './components/Animation/Animation';

function App() {
  return (
    <div className="App">
      <h2 style={{fontSize:"200px",textAlign:"center"}}>SCROLL DOWN</h2>
      <div className="dummyScroller" style={{width:"100vw",height:"500vh"}}></div>
      <Animation/>
    </div>
  );
}

export default App;
