import { useState } from 'react'


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



export function MemmoryCards({cards}){
    const [orderOfCards,setOrderOfCards] = useState([...cards])
    const handleClick = ()=>{
        const newArray = reorderRandomly(cards)
        setOrderOfCards([...newArray])
    }
    return(
        <>
        <div className='cards-main'>
            {orderOfCards.map(card=>{
                return <img src={card} alt="" onClick={handleClick} />
            })}
        </div>
        </>
    )
}

function reorderRandomly(array){
    const length  = array.length
    const newArray = new Array(length).fill(0);
    array.forEach(item=>{
        let newIndex = getRandomNumber(length)
        while (newArray[newIndex]!=0){
            newIndex = getRandomNumber(length)
        }
        newArray[newIndex] = item
    })

    return newArray

}


const getRandomNumber = (limit)=>{
    return Math.floor(Math.random()*limit)
}