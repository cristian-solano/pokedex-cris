import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import getPokemonById from "../Services/getPokemonById"

const Pokemon = () => {


    const { id } = useParams()
    const navigate = useNavigate()
    const [pokeName, setPokeName] = useState('')
    const [image, setImage] = useState('')
    const [pokeMove, setPokeMove] = useState('')
    const [ability, setAbility] = useState('')
    const [weight, setWeight] = useState(0) 
    const [height, setHeight] = useState(0)   
    const [order, setOrder] = useState(0)
   

    useEffect(() => {
        getPokemonById(id)
        .then((res) => {
            const movement = res.data.moves
            for (let i = 0; i < movement.length; i++){
               setPokeMove(res.data.moves[i].move.name)
            setPokeName(res.data.name)
            setImage(res.data.sprites.front_default)
            setAbility(res.data.abilities[0].ability.name)
            setWeight(res.data.weight)
            setHeight(res.data.height)
            setOrder(res.data.order)
            
            
    
            }
        })
    }, [id])

   

    return (
        <div  style={{backgroundColor: "aquamarine"}}>
            <div className="info">
                <h1>
                    <img src="../logo.png" alt="" />
                </h1>
                <span>{pokeName}</span>
                <img src={image} alt="pokemon" />
                </div>
                    <div className="movement"> 
                    <h3>Movements</h3>
                    <p>{pokeMove}</p>
                </div> 
                <div className="ability">
                    <h3>Ability</h3>
                    <p>{ability}</p>
                </div> 
                <div>
                    <h3>Weight</h3>
                    <p>{weight}</p>
                    <h3>Height</h3>
                    <p>{height}</p>
                </div>
                <div>
                    <h3>#{order}</h3>
                </div>


           
            <br />
            <button onClick={() => navigate(-1)}>Atras</button>
        </div>
    )
}

export default Pokemon