import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getPokemonById from "../Services/getPokemonById"

const Movements = () => {

    const { id } = useParams() 
    const [moves, setMoves] = useState()

    useEffect(() => {
        getPokemonById(id)
        .then((res) => {
            setMoves(res.data.moves[0].move)
        })

    }, [id])

    


    return (
        <div>
            {moves}
        </div>
    )
}

export default Movements