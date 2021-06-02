import logo from './logo.svg';
import './App.css';


import AlertBox from "./AlertBox"
import Fruit from "./Fruit"
import Counter from "./Counter"
import Dice from "./Dice"

function App() {
  return (
    <div className="App">
      <Dice/>
      <AlertBox message="Goodbye and thanks for all the fish!"/>
      <AlertBox message="Hello from the other side"/>
      <Fruit/>
      <Counter/>
    </div>
  );
}

export default App;
