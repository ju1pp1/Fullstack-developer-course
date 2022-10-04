const Note = ({ note, toggleImportance, deleteObject }) => {
    
    const label = note.important ? 'make not important' : 'make important'
    return (
        <div>
        <li className="note"> {note.content} {note.name} {note.phone}<button onClick={toggleImportance} >{label} </button>
            <button onClick={deleteObject} >Delete</button> </li>
            </div>
    )
}
export default Note