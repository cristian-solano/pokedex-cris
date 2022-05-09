import { useEffect, useState } from "react"
import PokeItem from "../Components/PokeItem"
import getAllPokemons from "../Services/getAllPokemons"

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
        <div>
            {list}
        {arrOffsetPos === 0 ? (
        <button className="btn btn-dark" type="button" onClick={() => setArrOffsetPos(arrOffsetPos + 20)}>
          Next 20
        </button>
      ) : (
        <>
          <button className="btn btn-dark" type="button" onClick={() => setArrOffsetPos(arrOffsetPos + 20)}>
            Next 20
          </button>
          <button className="btn btn-dark" type="button" onClick={() => setArrOffsetPos(arrOffsetPos - 20)}>
            Prev 20
          </button>
        </>
      )}
        </div>
    )
}

export default PokemonList