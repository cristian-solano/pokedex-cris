import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import getInfoByUrl from "../Services/getInfoByUrl"
import PokeType from "./PokeType"
import "../Styles/pokeitem.css"
const PokeItem = ({url}) => {

    const [pokeObj, setPokeObj] = useState({})
    const [pokeImg, setPokeImg] = useState('')
    const [typesArr, setTypesArr] = useState([]) 
    const [hp, setHp] = useState([])
    const [pokeId, setPokeId] = useState('')

    useEffect(() => {
            getInfoByUrl(url)
            .then((res) =>{ 
            console.log(res.data)
            setPokeObj(res.data)
            setPokeImg(res.data.sprites.front_default)
            setTypesArr(res.data.types)
            setHp(res.data.stats)
            setPokeId(res.data.id)
        })
    }, [url])

    

    return(
        <div className="poke-card-link">
            <div className="poke-card-container" >
                <div className="poke-card-content">
                    <img  src={pokeImg} alt='imagePoke' className="poke-card-img" /> 
                    <div className="poke-card-body">
                        <h1>{pokeObj.name}</h1>
                    </div>
                    <div className="poke-card-footer">
                        {typesArr.map((item) => <PokeType key={item.slot} type={item.type} />)}
                        <input type="checkbox" style={{display: "none"}} id={`poke-hidden-${pokeId}`} className="poke-hidden"/>
                        <div className="poke-card-footer-button">
                            <label htmlFor={`poke-hidden-${pokeId}`}>Watch Characters</label>
                            <Link to={`/pokedex/${pokeId}`}>More...</Link>
                        </div>

                        <div className="poke-card-powers">
                            <div className="poke-card-powers_content">
                        {hp && hp.map(items => (
                                
                                <div className="poke-card-power_items">
                                    <h2>{items.stat.name}</h2>
                                    <p>{items.base_stat}</p>
                                </div>
                               
                        ))}
                            </div>
                            <label htmlFor={`poke-hidden-${pokeId}`} className="poke-items-button">Cancel</label>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeItem