import { useState, useEffect } from "react";

const Display = ({ counter }) =>  <div> {counter} </div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => {
     if(counter > 0)
      setCounter(counter - 1)
  };
  const setToZero = () => setCounter(0);

  useEffect( () => {
    document.title = `You clicked ${counter} times`;
  })

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="Increase" />
      <Button onClick={decreaseByOne} text="Decrease" />
      <Button onClick={setToZero} text="Reset" />
    </div>
  );
};
export default App;
