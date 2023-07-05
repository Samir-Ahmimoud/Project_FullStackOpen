import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Part(props){
  return(
    <>
    <p>
        {props.part} {props.excercise}
    </p>
    </>
  )
}

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
    <Part part={props.parts[0]} excercise={props.excercises[0]}/>
    <Part part={props.parts[1]} excercise={props.excercises[1]}/>
    <Part part={props.parts[2]} excercise={props.excercises[2]}/>
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
