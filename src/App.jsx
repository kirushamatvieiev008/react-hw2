import './App.css'
import { Greeting } from './Components/Greeting/Greeting';
import { Message } from './Components/Message/Message';
import { Button } from './Components/Button/Button';

function App() {
  const clickFunc = () => {
    console.log("u pressed the button");
    
  }
  return (
    <>
      <Greeting name={"Kiril"}/>
      <Message text={"some message"} />
      <Button onClick={clickFunc}/>
    </>
  )
}

export default App
