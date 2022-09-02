const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    return (
        <div>
            <Header header={course} />
            <Content contentParts1={part1.name} contentParts2={part2.name} contentParts3={part3.name}
                contentExercises1={part1.exercises} contentExercises2={part2.exercises} contentExercises3={part3.exercises} />

            <Total total={part1.exercises + part2.exercises + part3.exercises} />

        </div>
    )
}
const Content = (props) => {
    //Kurssin osat ja tehtävämäärät
    
    return (
        <div>
            <Part parts={props.contentParts1} exercises={props.contentExercises1} />
            <Part parts={props.contentParts2} exercises={props.contentExercises2} />
            <Part parts={props.contentParts3} exercises={props.contentExercises3} />
        </div>
    )
}

const Total = (props) => {
    //Kurssin tehtävien yhteismäärä
    return (
        <div>
            <p> Tehtavien yhteismaara on: <b> {props.total}</b> </p>
        </div>
    )


}

const Header = (props) => {
    //Kurssin nimien renderöinti
    return (
        <div>
            <h1>{props.header}</h1>
        </div>
    )
}
const Part = (props) => {
    return (
        <div>
            <p> Osan nimi: <b> {props.parts} </b> ja osan tehtavamaara: <b> {props.exercises}</b> </p>
        </div>
    )
}

export default App
