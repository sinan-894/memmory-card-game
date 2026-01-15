import { useState,useEffect } from 'react'
import { ScoreBoard,MemmoryCards } from './components'
import './App.css'
import { getImageUrls } from './api'

function App() {
  const [score,setScore] = useState(0)
  const [bestScore,setBestScore] = useState(0)
  
  const updateScore = (isScore)=>{
    if(isScore){
      const newScore = score+1
      setScore(newScore)
      if(newScore>bestScore) setBestScore(newScore)
    }
    else{
      setScore(0)
    }
    
  }

  const imageUrls = {}
  return (
    <>
      <ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>
      <MemmoryCards cardsObject={imageUrls} score={score} setScore={updateScore}></MemmoryCards>

    </>
  )
}

export default App
