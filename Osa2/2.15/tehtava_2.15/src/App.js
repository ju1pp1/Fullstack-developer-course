import {useState, useEffect} from 'react'
import Note from './Components/Note'
//import Person from './Components/Person'
import noteService from './Services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [newNumber, setNewNumber] = useState('')
  
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
    alert(
      `the note '${note.content}' was already deleted from server`
    )
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
      phone: newNumber,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    }

      if (notes.findIndex((p) => p.name == newNote) == -1 ) {
        noteService
          .create(noteObject)
          .then(returnedNote => {
              setNotes(notes.concat(returnedNote))
              setNewNote('')
              setNewNumber('')
              })
            }
      if (notes.findIndex((p) => p.name == newNote) != -1 ) {
      const confirm = window.confirm(`Name '${newNote}' already exists, replace new number?`)

      if(confirm) {
        console.log('Korvaamisen pitäisi tapahtua')
        const replaceObjectOf = id => {
        const note = notes.find(n => n.id === id)
        const replacedNote = {...note}
        noteService
        .replace(replacedNote.id).then(replacednote => {
          setNotes(notes.map(n => n.id ))
          setNewNumber('')
        })
      }
      return replaceObjectOf
    }
    }
    }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
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
        Number:  <input value={newNumber} onChange={handleNumberChange} ></input>
        </div>
        <button >Add</button>
       </form>

       <div>

        <ul>
          <h2>Numbers</h2>
          {notesToShow.map(note =>
            <Note key={note.id} note={note} deleteObject={() => deleteObjectOf(note.id) } toggleImportance={() => toggleImportanceOf(note.id)} />
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