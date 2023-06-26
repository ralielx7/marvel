const BASE_PATH = "https://gateway.marvel.com:443";
const API_KEY = process.env.REACT_APP_PUBLIC_KEY;
 
export async function comicsList () {
    return await fetch (
        `${BASE_PATH}/v1/public/comics?apikey=${API_KEY}`
        ).then(res =>res.json()
    )
}

export async function eventsList(){

   return await fetch (
    `${BASE_PATH}/v1/public/events?apikey=${API_KEY}`
   ).then(res => res.json())
}

export async function characterList(props) {
    const customLimit = props.queryKey[1].numLimit || 20;
    const page = props.queryKey[1].page || 1;
    const offset = (page - 1) * customLimit || 0 
    console.log(props)
   return await fetch (
    `${BASE_PATH}/v1/public/characters?limit=${customLimit}&offset=${offset}&apikey=${API_KEY}`
   ).then(res => res.json())
}


