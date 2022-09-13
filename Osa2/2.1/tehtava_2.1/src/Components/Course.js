const Course = ({ course }) => {
    console.log()
    const Header = () => {
        return (
        <div>
            <h1>{course.name} </h1>
        </div>
            )
        }
    const Content = () => {
        return(
            <div>
                <ul>
                    {course.parts.map(parts =>
                       <li key={parts.id} > {parts.name} {parts.exercises} </li>
                        )}
                </ul>
            </div>
            )    
        }
    return (
        <div>
            <Header  />
            <Content  />
        
        </div>
    )
}
export default Course