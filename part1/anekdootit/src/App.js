import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  
   
  const [selected, setSelected] = useState(0)
  const [points, setPoint] = useState(new Array(6).fill(0))

  const randNext = newValue => {setSelected(newValue)
    console.log(newValue)
    console.log(points)
  }

  const newVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoint(copy)
    console.log(points)
  
}
  const biggest = Math.max(...points)

  const mostVotes = points.indexOf(Math.max(...points))
    
  /* 
  const biggest = (points) => {
    Math.max(...points)
    console.log(biggest)
    return points[biggest]
    
    
  }
   */ 


  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
    
    
  }

  return (
    <div>
      <h1>Anecdote of a day</h1>
      {anecdotes[selected]}
      <br />
      has {points[selected]} votes
      <br />
      <Button handleClick={() => randNext(getRandomInt(6))} text="seuraava" />
      <Button handleClick={() => newVote()} text="vote" />
      <br />
      <h1>Anecdote with most votes</h1>
      <br />
      {anecdotes[mostVotes]}
      <br />
      has {points[mostVotes]} votes
      {points}
      <br />
      {biggest}
      <br />
      {points[biggest]}
      {mostVotes}
    </div>
  )
}

export default App