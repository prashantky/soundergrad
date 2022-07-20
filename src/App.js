import logo from './logo.svg';
import './App.css';
import Slides from "./component/Slides"
function App() {
  const data=[{
    title:"Today's workout plan",
    text:"we're gonna do 3 bascis exercise"
  },
  {
    title:"Tomorrow workout plan",
    text:"we're gonna do 5 bascis exercise"
  }]
  return (
    <div className="App">
      <Slides slides={data}/>
    </div>
  );
}

export default App;
