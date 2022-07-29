import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}> {text}</button>;
};

const Winner = ({votes, anecdotes}) => {
  const max = Math.max(...votes);
  return(
     <div>
      <h1> Anecdote with most votes</h1>
      <p> {anecdotes[votes.indexOf(max)]}</p>
      <p> has {max}</p>
     </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(anecdotes[0])
  const [votes, setVote] = useState(new Array(6).fill(0))
  const [index, setIndex] = useState(0) //test

  const handleNextAnecdote = () => {
    const tempIndex = Math.floor(Math.random() * (anecdotes.length - 1))
    setSelected(anecdotes[tempIndex])
    setIndex(tempIndex) //test
  };

  const handleVoteAnecdote = () => {
    const copy = [...votes]
    copy[anecdotes.indexOf(selected)] += 1
    setVote(copy)
  }

  console.log(index)

  return (
    <div>
      <h1> Anecdote of the day</h1>
      <p> {selected} </p>
      <p> has {votes[anecdotes.indexOf(selected)]} votes</p>
      <Button handleClick={handleVoteAnecdote} text="vote" />
      <Button handleClick={handleNextAnecdote} text="next anecdote" />
      <Winner votes={votes} anecdotes={anecdotes} />
    </div>
  );
};

export default App;
