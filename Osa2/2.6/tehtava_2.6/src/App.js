import {useState} from 'react'
//import Note from './Components/Note'
import Person from './Components/Person'
/*
const Note = ({note}) => {
  return (
    <li>{note.content} </li>
  )
}
*/
const App = () => {
  //const [notes, setNotes] = useState(props.notes)
  const [persons, setPersons] = useState([
    {name : 'Seppo Taalasmaa'}
  ])
  const [newPerson, setNewPerson] = useState('')
  //const [newNote, setNewNote] = useState('')
  //const [showAll, setShowAll] = useState(true)
  
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newPerson,
    }
    setPersons(persons.concat(personObject))
    setNewPerson('')
  }
  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
  }
/*
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)
*/
  return (
      <div>
        <h1>Phonebook</h1>
        
       <form onSubmit={addPerson}>
        <div>
        Name: <input 
        value={newPerson}
        onChange={handlePersonChange}
        />
        </div>
        <div>
        <button type="Submit">Save</button>
        </div>
       </form>

       <div>
        <h2>Numbers</h2>
          
            {persons.map(person =>
              <Person key={person.name} person={person} />
              )}
          
        </div>

      </div>
  )
}
export default App
/* 
<ul>
          {notesToShow.map(note =>
            <Note key={note.id} note={note} />
       )}       
       </ul>

         <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all' }
          </button>   
*/