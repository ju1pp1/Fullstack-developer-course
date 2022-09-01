const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header header={course} />
            <Content content1={part1} content2={exercises1} />
            <Content content1={part2} content2={exercises2} />
            <Content content1={part3} content2={exercises3} />
            <Total total={exercises1 + exercises2 + exercises3} />

        </div>
    )
}
const Content = (props) => {
    //Kurssin osat ja teht�v�m��r�t
    return (
        <div>
            <p> Osan nimi: <b>{props.content1}</b> ja osan tehtavamaara: <b>{props.content2}</b> </p>
        </div>
    )
}

const Total = (props) => {
    //Kurssin teht�vien yhteism��r�
    return (
        <div>
            <p> Tehtavien yhteismaara on: <b> {props.total}</b> </p>
        </div>
    )


}

const Header = (props) => {
    //Kurssin nimien render�inti
    return (
        <div>
            <h1>{props.header}</h1>
        </div>
    )
}

export default App
