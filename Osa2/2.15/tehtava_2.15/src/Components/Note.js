const Note = ({ note, toggleImportance }) => {
    
    const label = note.important ? 'NOT important' : 'Important'
    return (
        <div>
        <li> {note.content} {note.name} {note.phone}<button onClick={toggleImportance} >{label}</button> </li>
            </div>
    )
}
export default Note