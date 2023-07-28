import '../Styles/Login.css'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

const Login = () => {

const [userName, setUserName] = useState('')

const dispatch = useDispatch()
const navigate = useNavigate() 

const handlerOnClick = () => {
    dispatch({
        type: '@user/login',
        payload: userName
    })
    navigate('/pokedex')

}

    return (
        <div className='login-content'>
            <h1>Pokedex</h1>
            <div className='login-search'>
                <input  onChange={(e) => setUserName(e.target.value)} type="text" className="login-input" placeholder="Pokemon User" aria-describedby="basic-addon1" />
                <button onClick={handlerOnClick} type="button" className="login-button">Iniciar Sesion</button>
            </div>
        </div>
    )
}

export default Login