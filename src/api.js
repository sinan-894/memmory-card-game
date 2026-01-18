import { getRandomNumber } from "./game-logic"


export async function getImageUrlsObject(numberOfImages){
    const imageUrlObject = {}
    for(let i=0;i<numberOfImages;i++){
        let {id,imageUrl}  = await getImageUrl()
        imageUrlObject[id] = imageUrl 
    }

    return imageUrlObject
}

async function getImageUrl(){
    const pokemonID = getRandomNumber(1025,1)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    const pokemonData = await response.json();
    return {id:pokemonID,imageUrl:pokemonData.sprites.other['official-artwork']['front_default']}
    
}