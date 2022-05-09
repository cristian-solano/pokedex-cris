import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import getInfoByUrl from "../Services/getInfoByUrl"
import PokeType from "./PokeType"
import "../Login.css"
const PokeItem = ({url}) => {

    const [pokeObj, setPokeObj] = useState({})
    const [pokeImg, setPokeImg] = useState('')
    const [typesArr, setTypesArr] = useState([])
    const [hp, setHp] = useState(0)
    const [pokeId, setPokeId] = useState('')

    useEffect(() => {
            getInfoByUrl(url)
            .then((res) =>{ 
            setPokeObj(res.data)
            setPokeImg(res.data.sprites.front_default)
            setTypesArr(res.data.types)
            setHp(res.data.stats[0].base_stat)
            setPokeId(res.data.id)
        })
    }, [url])

    

    return(
        <Link to={`/pokedex/${pokeId}`} style={{textDecoration: "none", color: "black"}}>
            <div className="card-group" style={{margin: "15px", backgroundColor: "orange"}}>
                <div className="container">
                    <img className="img-thumbnail rounded float-end" src={pokeImg} alt='' /> 
                    <div className="card-body">
                        <h1>{pokeObj.name}</h1>
                    </div>
                    <div className="card-footer">
                        <h3>{typesArr.map((item) => <PokeType key={item.slot} type={item.type} />)}</h3>
                        <h2>HP: {hp}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PokeItem