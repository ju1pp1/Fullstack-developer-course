const Person = ({ person }) => {
    
    //{notes.map(x => 
      //  <li key={x.id}> {x.content} </li>
        //)}
    return (
        <div>
            <li>
            {person.name.common}
            </li>
        </div>
    )
}
export default Person