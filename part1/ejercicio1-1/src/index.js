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
    <Part part={props.parts[0].name} excercise={props.parts[0].exercises}/>
    <Part part={props.parts[1].name} excercise={props.parts[1].exercises}/>
    <Part part={props.parts[2].name} excercise={props.parts[2].exercises}/>
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
  const part1 = {
    name:'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name:'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name:'State of a component',
    exercises: 14
  }
  
  return (
    <div>
      <Header course={course}/>
      <Content parts={[part1, part2, part3]} />
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  );
}


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


