import {useState, useEffect} from 'react'
import Note from './Components/Note'
import noteService from './Services/notes'
import Notification from './Components/Notification'

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br/>
      <em>Note app, Department of Computer Science, University of Helsinki 2022</em>
    </div>
  )
}

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    noteService
    .getAll()
    .then(initialNotes => {
      setNotes(initialNotes)
    })
}, [])

  const toggleImportanceOf = id => {
    //Jokaiselle muistiinpanolle id-kenttään perustuva yksilöivä url.
    //const url = `http://localhost:3001/notes/${id}`
    //Taulukon find-metodilla etsitään muutettava muistiinpano ja talletetaan muuttujaan -note- viite siihen. 
    const note = notes.find(n => n.id === id)
    //Luodaan uusi olio, jonka sisältö on sama kuin vanhan olion sisältö. Poislukien kenttä important.
    const changedNote = {...note, important: !note.important}

    /*
    axios.put(url, changedNote).then(response => {
      setNotes(notes.map(note => note.id !== id ? note : response.data))
    })
    */
  noteService
  .update(id, changedNote).then(returnedNote => {
    setNotes(notes.map(note => note.id !== id ? note : returnedNote))
  })
  .catch(error => {
    setErrorMessage(
      `the note '${note.content}' was already deleted from server`
    )
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
    setNotes(notes.filter(n => n.id !== id))
  })
}
const deleteObjectOf = id => {
  const deleteNote = notes.find(n => n.id === id)
  const deletedNote = {...deleteNote}

  const confirm = window.confirm(`Are you sure?`)
  if(confirm) {
    noteService
    .deleteThis(id, deletedNote).then(deletednote => {
      //setNotes(notes.map(note => note.id ? note : deletednote))
      setNotes(notes.filter(n => n.id !== id))
    })
    .catch(error => {
      alert(
        `the user '${deleteNote.name}' has already been deleted from the server.`
      )
      setNotes(notes.filter(n => n.id !== id))
    })
  } else {
  
}
}

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    }
    /*
    axios
          .post('http://localhost:3001/notes', noteObject)
          .then(response => {
            setNotes(notes.concat(response.data))
            setNewNote('')
          }) 
    */
  noteService
  .create(noteObject)
  .then(returnedNote => {
    setNotes(notes.concat(returnedNote))
    setNewNote('')
  })
}
  const handleNoteChange = (event) => {
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
        <Notification message={errorMessage} />
        <ul>
          {notesToShow.map(note =>
            <Note key={note.id} note={note} deleteObject={() => deleteObjectOf(note.id) } toggleImportance={() => toggleImportanceOf(note.id)} />
       )}       
       </ul>

         <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all' }
          </button>  
          <Footer/>
        </div>

      </div>
  )
}
export default App