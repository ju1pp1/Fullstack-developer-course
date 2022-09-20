import {useState, useEffect} from 'react'
import Person from './Components/Person'
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [value, setValue] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      console.log('Promise fulfilled')
      setNotes(response.data)
  })
}, [])
  console.log('render', notes.length, 'persons')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newNote,
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

  return (
      <div>
        <div>
          <p>Filter countries</p>
          <input value={value} onChange={e => setValue(e.target.value)} >
          </input>
        </div>
        <h1>Phonebook</h1>
        
       <form onSubmit={addNote}>
        <div>
        Name: <input 
        value={newNote}
        onChange={handleNoteChange}
        />
        </div>
        <div>
        <button type="Submit">Save</button>
        </div>
       </form>

       <div>
        
        <h2>Countries</h2>
          
        <ul>
      {notes.filter(note => {
        if (!value) return true
        if (note.name.common.toLowerCase().includes(value) || note.name.common.includes(value)) {
          return true
        }
      })
        .map(person =>
            <Person key={person.id} person={person} />
        )}
       </ul>

         <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all' }
          </button>  
          
        </div>

      </div>
  )
}
/*
{notes.map(person =>
            <Person key={person.id} person={person} />
       )}  
*/
export default App