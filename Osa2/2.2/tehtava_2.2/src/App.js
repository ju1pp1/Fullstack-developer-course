import Course from './Components/Course'
/*
const Note = ({note}) => {
  return (
    <li>{note.content} </li>
  )
}
*/
const App = ({course}) => {
  return (
      <div>
       <Course key={course.id} course={course} />
        
      </div>
  )
}
export default App
/* 
{course.parts.map(course =>
             <Course key={course.id} course={course} />
            )}
*/