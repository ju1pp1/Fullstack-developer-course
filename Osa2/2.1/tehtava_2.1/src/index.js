import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const course = {
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
  }
]
}
console.log(course.name)
const result = course.parts.map(coursee => coursee.name)
console.log(result)

ReactDOM.createRoot(document.getElementById('root')).render(
<App course={course} />)