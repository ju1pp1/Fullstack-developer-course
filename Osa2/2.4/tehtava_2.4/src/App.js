import Course from './Components/Course'
/*
const Note = ({note}) => {
  return (
    <li>{note.content} </li>
  )
}
*/
const App = () => {
  const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    },
    {
      name: 'Redux',
      exercises: 11,
      id: 4
    }
  ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]
  return (
      <div>
        <h1>Web development curriculum</h1>
       <h2>{courses[0].name}</h2>
       <p>
        {courses[0].parts.map(x => 
        <li key={x.id} > {x.name} {x.exercises} </li>
        )}
        </p>
        <p>Total sum of exercises is</p> {courses[0].parts.reduce((sum, exercise) => sum + exercise.exercises, 0)}
        <h2> {courses[1].name} </h2>
        {courses[1].parts.map(x => 
        <li key={x.id} > {x.name} {x.exercises} </li>
        )}
        <p> Total sum of exercises is</p> {courses[1].parts.reduce((sum, exercise) => sum + exercise.exercises, 0)}
        
      </div>
  )
}
export default App
/* 
{course.parts.map(course =>
             <Course key={course.id} course={course} />
            )}
*/