import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "../Styles/pokemon.css"
import logo from '../images/logo.png'
import getPokemonById from "../Services/getPokemonById"

const Pokemon = () => {


    const { id } = useParams()
    const navigate = useNavigate()
    const [pokeName, setPokeName] = useState('')
    const [image, setImage] = useState('')
    const [pokeMove, setPokeMove] = useState([])
    const [ability, setAbility] = useState([])
    const [weight, setWeight] = useState(0) 
    const [height, setHeight] = useState(0)   
    const [order, setOrder] = useState(0)
   

    useEffect(() => {
        getPokemonById(id)
        .then((res) => {
            console.log(res.data)
            setPokeMove(res.data.moves)
            setPokeName(res.data.name)
            setImage(res.data.sprites.front_default)
            setAbility(res.data.abilities)
            setWeight(res.data.weight)
            setHeight(res.data.height)
            setOrder(res.data.order)
        })
    }, [id])

   

    return (
        <div className="pokemon-container">
            <img src={logo} alt="logo"/>
            <div className="pokemon-content">
                <div className="pokemon-names">
                    <img src={image} alt="pokemon" />
                    <span>{pokeName}</span>
                </div>
                <div className="pokemon-infor">
                    <div className="poke-characteristics"> 
                        <h3>Movements</h3>
                        <div>
                        {pokeMove && pokeMove.map(items => (
                            <p key={items.move.name}>{items.move.name}</p>
                        ))}
                        </div>
                        
                    </div> 
                    <div className="poke-characteristics">
                        <h3>Ability</h3>
                        {ability && ability.map(items => (
                            <p>{items.ability.name}</p>
                        ))}
                        
                    </div> 
                    <div className="poke-characteristics">
                        <h3>Weight</h3>
                        <p>{weight}</p>
                        
                    </div>
                    <div className="poke-characteristics">
                        <h3>Height</h3>
                        <p>{height}</p>
                    </div>
                    <div className="poke-order">
                        <h3>Number {order}</h3>
                    </div>
                </div>
                <br />
            </div>
            <button className="poke-button-back" onClick={() => navigate(-1)}>Atras</button>
        </div>
    )
}

export default Pokemon