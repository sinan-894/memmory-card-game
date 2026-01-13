

export async function getImageUrls(numberOfImages){
    const listImageUrls = []
    for(let i=0;i<numberOfImages;i++){
        let imageUrl  = await getImageUrl()
        listImageUrls.push(imageUrl)
    }

    return listImageUrls
}

async function getImageUrl(){
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=S10RpEK19UYqeHM1pzvPuHWePzHOxvcb&s=cats');
    const catData = await response.json();
    return catData.data.images.original.url;
}