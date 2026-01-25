import { useState,useEffect } from 'react'
import { ScoreBoard,MemmoryCards,WinLoseMessage } from './components'
import './App.css'
import { getImageUrlsObject } from './api'
import { closeMessageBox} from './game-logic'

function App() {
  const [score,setScore] = useState(0)
  const [bestScore,setBestScore] = useState(0)
  const [gameID,setGameID] = useState(0);
  
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

  const restartGame = ()=>{
    setScore(0)
    closeMessageBox()
    setGameID(gameID+1)
    setImageUrlsObject({})
  }

  const [imageUrlsObject,setImageUrlsObject] = useState({})

  useEffect(()=>{
    getImageUrlsObject(8).then(result=>{
      setImageUrlsObject(result)
    })
  },[gameID])
  return (
    
      (Object.keys(imageUrlsObject).length===0)?
      <div>waiting</div>:
      <>  
        <ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>
        <MemmoryCards cardsObject={imageUrlsObject} score={score} setScore={updateScore}></MemmoryCards>
        <WinLoseMessage onRestart = {restartGame}></WinLoseMessage>
      </>
  )
}

export default App
