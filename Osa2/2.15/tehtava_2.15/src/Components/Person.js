const Person = ({ personChange }) => {
    
    //{notes.map(x => 
      //  <li key={x.id}> {x.content} </li>
        //)}
    return (
        <div>
            <button type="Submit" onClick={personChange} >Add</button>
        </div>
    )
}
export default Person