const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ exercices }) =>{
  const total = 0
  const sum = exercices.reduce(
    (a, s) => a + s, total
  )
  return(
    <>
    <h4>Total of {sum} exercises</h4>
    </>
  )
} 

const Part = ({ name, exercise }) => 
  <p>
    {name} {exercise}
  </p>

const Content = ({ parts }) => {
  return(
    <>
    {parts.map(part => (
      <Part key={part.id} name={part.name} exercise={part.exercises}/>
    ))} 
    </>
  )
}

const Course = ({course}) => {
  return(
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercices={course.parts.map( part => part.exercises )} />
    </>
  )
}

export default Course;