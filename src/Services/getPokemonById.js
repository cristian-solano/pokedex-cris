import axios from "axios"

const getPokemonById = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const req =  await axios.get(url)
    return req
}

export default getPokemonById