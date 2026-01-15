import { useState } from 'react'
import { reorderRandomly,displayGameWon, displayGameLost } from './game-logic'


export function ScoreBoard({score,bestScore}){
    
    return (
        <>
        <div className='score-board-main'>
            <section className='score-board score'>Score : {score}</section>
            <section className='score-board bestscore'>Best Score : {bestScore}</section>
        </div>
        </>
    )
}



export function MemmoryCards({cardsObject, setScore}){
    const cards = Object.keys(cardsObject)
    const [orderOfCards,setOrderOfCards] = useState([...cards])
    const [memmory,setMemmory] = useState([])
    const handleClick = (e)=>{
        const newArray = reorderRandomly(cards)
        console.log(memmory)
        if(isGameOver(e.target.id)){
            setScore(0)
            setMemmory([])
            displayGameLost()
        }
        else{
            setScore(1)
            setMemmory([...memmory,e.target.id])
        }
        setOrderOfCards([...newArray])
        
    }

    const isGameOver  = (card)=>{
        console.log(memmory.length)
        if (memmory.length<cards.length-1) return memmory.includes(card)
        else if(!memmory.includes(card)) displayGameWon()
        return 1;
    }
    return(
        <>
        <div className='cards-main'>
            {orderOfCards.map(card=>{
                return <img src={cardsObject[card]} key={card} id={card} alt="" onClick={handleClick} />
            })}
        </div>
        </>
    )
}

