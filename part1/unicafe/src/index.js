import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Feedback({content}){
  return(
    <>
      <h1>give feedback</h1>
      <Button handleClick={content[0].handleClick} name={content[0].name} />
      <Button handleClick={content[1].handleClick} name={content[1].name} />
      <Button handleClick={content[2].handleClick} name={content[2].name} />
    </>
  )
}

function Statistics({content, state}){
  if(content.all === 0){
    return<p>No feedback given</p>
  }
  return(
    <>
      <table>
        <tbody>
        <StatisticLine  text="good" counter={state[0].counter}/>
        <StatisticLine  text="neutral"  counter={state[1].counter}/>
        <StatisticLine  text="bad"  counter={state[2].counter}/>
        <StatisticLine  text="all" counter={content.all}/>
        <StatisticLine  text="average" counter={content.average}/>
        <StatisticLine  text="positive" counter={content.positive}/>
        </tbody>
      </table>
    </>
  )
}

function Button({handleClick, name}){
  return <button onClick={handleClick}>{name}</button>
}
function StatisticLine ({text, counter}){
  return (
    <>
    <tr>
      <td>{text}</td>
      <td>{counter}</td>
    </tr> 
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let total = bad+neutral+good
  const content = {
      all:  bad+neutral+good,
      average: ((good + (bad * -1)) / total).toFixed(1),
      positive: ((good / total) * 100).toFixed(1)+ '%',
      state:[
        {
          name: 'good',
          counter: good,
          handleClick: () => setGood(good+1)
        },
        {
          name: 'neutral',
          counter: neutral,
          handleClick: () => setNeutral(neutral+1)
        },
        {
          name: 'bad',
          counter: bad,
          handleClick: () => setBad(bad+1)
        },
      ]
  }

  return (
    <div>
      <Feedback content={content.state}/>
      <h1>statistics</h1>
      <Statistics content={content} state={content.state}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);