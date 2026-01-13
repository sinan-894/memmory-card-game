import { useState,useEffect } from 'react'
import { ScoreBoard,MemmoryCards } from './components'
import './App.css'
import { getImageUrls } from './api'

function App() {
  const [score,setScore] = useState(0)
  let bestScore = 0
  const imageUrls ={ 
    'brook':'src/images/brook.jpeg',
    'chopper':'src/images/chopper.jpeg',
    'franky':"src/images/Franky.jpeg",
    "luffy":"src/images/luffy-250.jpg",
    "nami":'src/images/nami.jpeg',
    "robin":"src/images/robin.jpeg",
    "sanji":"src/images/sanji.jpeg",
    "ussop":"src/images/ussop.jpeg"
  }

  return (
    <>
      <ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>
      <MemmoryCards cardsObject={imageUrls} score={score} onScore={setScore}></MemmoryCards>

    </>
  )
}

export default App
