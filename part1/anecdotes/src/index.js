import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function findMaxVotes(votes){
  const maxValue = Math.max(...votes)
  for(let i = 0 ; i < votes.length; i++)
    if(votes[i] === maxValue)
      return i
  return 0
}

function AddVotes(oldVotes, indexVote){
  const newVotes = [...oldVotes]
  newVotes[indexVote] += 1

  return newVotes
}

function Anecdote({anecdote, vote}){
  return(
    <>
    <p>{anecdote}</p>
    <p>has {vote} votes</p>
    </>
  )
}

function Button({text, handleClick}){
  return <button onClick={handleClick}>{text}</button>
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} vote={votes[selected]}/>
      <Button text="votes" handleClick={() => setVotes(AddVotes(votes, selected))} />
      <Button text="next anecdote" handleClick={() => setSelected(getRandomInt(anecdotes.length))}/>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[findMaxVotes(votes)]} vote={votes[findMaxVotes(votes)]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>
);
