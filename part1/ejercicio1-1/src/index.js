import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Header(props){
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

function Content(props){
  return(
    <>
      <p>
        {props.parts[0]} {props.excercises[0]}
      </p>
      <p>
        {props.parts[1]} {props.excercises[1]}
      </p>
      <p>
        {props.parts[2]} {props.excercises[2]}
      </p>
    </>
  )
}

function Total(props){
  return(
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <Header course={course}/>
      <Content parts={[part1, part2, part3]} excercises={[exercises1, exercises2,exercises3]} />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  );
}


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
