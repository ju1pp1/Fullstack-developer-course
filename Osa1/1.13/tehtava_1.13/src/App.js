import {useState } from 'react'

const AnecdoteButton = (props) => (
  <button onClick={props.anecdoteHandler} >
    Click me
  </button>
)
const StatisticLine = (props) => { 
   return(
    <div>{props.texti} {props.value}</div>
   )
  }
const Button = (props) => (
<button onClick={props.handleClick} >
                {props.text}
            </button>
)
const VoteButton = (props) => {
  return (
    <button onClick={props.handleVote} >Vote</button>
  )
}

const Statistics = (props) => {
  if (props.allClickz.length === 0){
    return (
      <div><br></br>
        No feedback given.
      </div>
    )
  }
  return (
   <div>
    

    <h1>Statistics</h1>
    <StatisticLine texti="Good" value={props.goodStat} /> 
    <StatisticLine texti="Neutral" value={props.neutralStat} />
    <StatisticLine texti="Bad" value={props.badStat} />
    <StatisticLine texti="All" value={props.allStat} />
    <StatisticLine texti="Average" value={props.averageStat} />
    <StatisticLine texti="Positive" value={props.positiveStat} />
    
    
   </div> 
  )
}
    const App = () => {

        const anecdotes =  [
      'If it hurts, do it more often.',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
        
        const [good, setGood] = useState(0)
        const [neutral, setNeutral] = useState(0)
        const [bad, setBad] = useState(0)
        const [all, setAll] = useState(0)
        const [average, setAverage] = useState(0)
        const [allClicks, setAllClicks] = useState([])
        const [selected, setSelected] = useState(0)
        const [vote, setVote] = useState([0, 0, 0, 0, 0, 0, 0])

          const handleGoodClick = () => {
            setAllClicks(allClicks.concat('Good'))
            setAverage(average + 1)
            setAll(all + 1)
            setGood(good + 1)
            
          }
          const handleNeutralClick = () => {
            setAllClicks(allClicks.concat('Neutral'))
            setAverage(average + 0)
            setAll(all + 1)
            setNeutral(neutral + 1)
            
          }
          const handleBadClick = () => {
            setAllClicks(allClicks.concat('Bad'))
            setAverage(average - 1)
            setAll(all + 1)
            setBad(bad + 1)
            
          }
          const handleAllClicks = () => {
            setAllClicks(allClicks + 1)
          }
          const handleAnecdote = () => {
            //const random = anecdotes[Math.floor(Math.random() * anecdotes.length)] 
            setSelected(Math.floor(Math.random(selected) * anecdotes.length))
          }
          const handleVote = () => {
          const copy = [...vote]
          copy[selected] += 1
          setVote(copy)
          

          }
        return (
          
        <div>
            {anecdotes[selected]}<br></br>
            <AnecdoteButton anecdoteHandler={handleAnecdote} />
            <VoteButton handleVote={handleVote} /><br></br>
            {vote[selected]} <br></br>
            <h1>Give feedback</h1>
            <Button handleClick={handleGoodClick} handleAllClicks={handleAllClicks} text="Good" />
            <Button handleClick={handleNeutralClick} text="Neutral"/>
            <Button handleClick={handleBadClick} text="Bad"/>
            
            <Statistics allClickz={allClicks}
            goodStat={good}
            neutralStat={neutral}
            badStat={bad}
            allStat={all}
            averageStat={average / all}
            positiveStat={good / all * 100 + " %"} 
            
            />
            </div>
            )

    }

export default App
