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
  },
  {
    name: 'Redux',
    exercises: 11,
    id: 4
  }
]
}
const totalAmount = course.parts.reduce((sum, exercise) => sum + exercise.exercises, 0)
console.log(totalAmount)

ReactDOM.createRoot(document.getElementById('root')).render(
<App course={course} />)