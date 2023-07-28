import { useEffect, useState } from "react"
import PokeItem from "../Components/PokeItem"
import getAllPokemons from "../Services/getAllPokemons"
import '../Styles/pokemonlist.css'

const PokemonList = () => {

    const [pokeList, setPokeList] = useState([])
    const [arrOffsetPos, setArrOffsetPos] = useState(0)
    

    useEffect(() => {
        getAllPokemons(arrOffsetPos)
        .then((res) => {
            setPokeList(res.data.results)
        })
    }, [arrOffsetPos])


    const list = pokeList.map((item) => <PokeItem key={item.url} url={item.url}/>)

    
    return (
        <div className="pokeList-content">
          
          <div className="pokeList-items">
          {list}
          </div>
            
        {arrOffsetPos === 0 ? (
        <button className="pokeList-buttons" type="button" onClick={() => setArrOffsetPos(arrOffsetPos + 20)}>
          Next 20
        </button>
      ) : (
        <div className="pokeList-two-buttons">
          <button className="pokeList-buttons" type="button" onClick={() => setArrOffsetPos(arrOffsetPos + 20)}>
            Next 20
          </button>
          <button className="pokeList-buttons" type="button" onClick={() => setArrOffsetPos(arrOffsetPos - 20)}>
            Prev 20
          </button>
        </div>
      )}
        </div>
    )
}

export default PokemonList