import {useState, useEffect} from 'react'
import Note from './Components/Note'
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
    .get('http://localhost:3001/notes')
    .then(response => {
      console.log('Promise fulfilled')
      setNotes(response.data)
  })
}, [])
  console.log('render', notes.length, 'notes')

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

  return (
      <div>
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
        <h2>Numbers</h2>
          
        <ul>
          {notesToShow.map(note =>
            <Note key={note.id} note={note} />
       )}       
       </ul>

         <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all' }
          </button>  
          
        </div>

      </div>
  )
}
export default App
