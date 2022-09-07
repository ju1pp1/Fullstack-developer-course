import {useState } from 'react'

    const App = () => {
        const [good, setGood] = useState(0)
        const [neutral, setNeutral] = useState(0)
        const [bad, setBad] = useState(0)

        const Button = (props) => (
            <button onClick={props.handleClick}>
                {props.text}
            </button>
        )
        const Good = "Good"
        const Neutral = "Neutral"
        const Bad = "Bad"

        return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={() => setGood(good + 1)} text="Good" />
            <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
            <Button handleClick={() => setBad(bad + 1)} text="Bad"/>
            
            <h1>Statistics</h1>
            {Good} {good} <br></br>
            {Neutral} {neutral} <br></br>
            {Bad} {bad}
        </div>
            )
    }

export default App
