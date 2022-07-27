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
  const all = good + neutral + bad;
  const average =(good + (neutral * 0) + (bad * -1))
  const positive = (good * 100) / all;

  const handleGoodClick = () =>{
    setGood(good + 1)
  }
  const handleNeutralClick = () =>{
    setNeutral( neutral + 1)
  }
  const handleBadlick = () =>{
    setBad(bad + 1)
  }


  return(
	<div>
    <h1> give feedback</h1>
		<Button handleClick={handleGoodClick} text='good' />
    <Button handleClick={handleNeutralClick} text='neutral' />
    <Button handleClick={handleBadlick} text='bad' />
    <h1> statistics</h1>
    <Display name='good' value={good} />
    <Display name='neutral' value={neutral} />
    <Display name='bad' value={bad} />
    <Display name='all' value={all} />
    <Display name='average' value={average/all} />
    <Display name='positive' value={positive + ' %'} />
	</div>
  )
};

export default App;
