import '../Login.css'
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
        <div className='content'>
            <div className='login'>
            <input  onChange={(e) => setUserName(e.target.value)} type="text" className="form-control" placeholder="Pokemon User" aria-describedby="basic-addon1" />
            <button onClick={handlerOnClick} type="button" className="btn btn-light m-top">Iniciar Sesion</button>
            </div>
        </div>
    )
}

export default Login