import Courses from './Components/Course'
/*
const Note = ({note}) => {
  return (
    <li>{note.content} </li>
  )
}
*/
const App = ({courses}) => {
  
  return (
      <div>
        <Courses key={courses.id} courses={courses}  />
      </div>
  )
}
export default App
/* 
{course.parts.map(course =>
             <Course key={course.id} course={course} />
            )}
*/