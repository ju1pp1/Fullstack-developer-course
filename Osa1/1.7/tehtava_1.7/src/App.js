import {useState } from 'react'

    const App = () => {
        const [good, setGood] = useState(0)
        const [neutral, setNeutral] = useState(0)
        const [bad, setBad] = useState(0)
        const [all, setAll] = useState(0)
        const [average, setAverage] = useState(0)

        
        const Button = (props) => (
            <button onClick={props.handleClick} >
                {props.text}
            </button>
        )
          const handleGoodClick = () => {
            setAverage(average + 1)
            setAll(all + 1)
            setGood(good + 1)
          }
          const handleNeutralClick = () => {
            setAverage(average + 0)
            setAll(all + 1)
            setNeutral(neutral + 1)
          }
          const handleBadClick = () => {
            setAverage(average - 1)
            setAll(all + 1)
            setBad(bad + 1)
          }
          

        const Good = "Good"
        const Neutral = "Neutral"
        const Bad = "Bad"
        const All = "All"
        const Average = "Average"
        const Positive = "Positive"
        
        
        return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={handleGoodClick} text="Good" />
            <Button handleClick={handleNeutralClick} text="Neutral"/>
            <Button handleClick={handleBadClick} text="Bad"/>
            
            <h1>Statistics</h1>
            {Good} {good} <br></br>
            {Neutral} {neutral} <br></br>
            {Bad} {bad}<br></br>
            {All} {all}<br></br>
            {Average} {average / all}<br></br>
            {Positive} {good / all * 100} %

        </div>
            )
    }

export default App
