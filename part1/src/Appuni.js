import React, { useState } from 'react'


const Display = props =>{
  return (  
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>  
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <Display  text="No feedback given"/>
      </div>
    )
  }
  return (
    <div>
    <table>
      <tbody>     
        <Display value={props.good} text="good"/>
        <Display value={props.neutral} text="neutral"/>
        <Display value={props.bad} text="bad"/>
        <Display value={props.all} text="all"/>
        <Display value={props.average / props.all} text="average"/>
        <Display value={props.good / props.all * 100 + " %"} text="positive"/>  
      </tbody>
    </table>
  </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)



const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const setToGood = newValue => {setGood(newValue)
    setAll(all + 1)
    setAverage(average + 1)
  }
  const setToNeutral = newValue => {setNeutral(newValue)
    setAll(all + 1)
    setAverage(average + 0)
  }
  const setToBad = newValue => {setBad(newValue)
    setAll(all + 1)
    setAverage(average - 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} average = {average} all = {all}/>  
    </div>      
  )
}

export default App