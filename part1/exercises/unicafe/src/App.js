import { useState } from "react";

const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}> {text}</button>
}

const Display = ({name, value}) => {
  return (
    <p> {name} {value}</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  return(
	<div>
    <h1> give feedback</h1>
		<Button handleClick={() => setGood(good + 1)} text='good' />
    <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
    <Button handleClick={() => setBad(bad + 1)} text='bad' />
    <h1> statistics</h1>
    <Display name='good' value={good} />
    <Display name='neutral' value={neutral} />
    <Display name='bad' value={bad} />
	</div>
  )
};

export default App;
