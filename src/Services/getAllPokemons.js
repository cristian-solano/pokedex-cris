import axios from "axios"

const getAllPokemons = async (position) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${position}&limit=${position + 20}`
    const req = await axios.get(url)
    return req
}

export default getAllPokemons