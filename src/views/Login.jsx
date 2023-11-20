import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router"

export default function Login() {

    let [icon, setIcon] = useState("fa-eye")
    let [typeInput, setTypeInput] = useState("password")

    let [password, setPassword] = useState("")
    let [username, setUsername] = useState("")

    const navigate = useNavigate()

    const handleOnClick = () => {
        if (icon == "fa-eye") {
            setTypeInput("text")
            setIcon("fa-eye-slash")
        } else {
            setTypeInput("password")
            setIcon("fa-eye")
        }
    }

    const handleChangeUsername = e => {
        setUsername(e.target.value)
    }

    const handleChangePassword = e => {
        setPassword(e.target.value)
    }

    const login = async () => {
        let response = await axios.get("http://localhost:3000/users")
        let allUsers = response.data
        allUsers.forEach(user => {
            if(username == user.email && password == user.password) {
                sessionStorage.setItem("username", username)
                sessionStorage.setItem("password", password)
                sessionStorage.setItem("name", user.name)
                navigate("/infos")
            } else {
                console.log("Usuário não cadastrado")
            }
        })
    }

    return (
        <>
            <main className="allPage">
                <section className="loginBox">
                    <h2>Entre para ver o projeto</h2>
                    <div className="inputFormatacao">
                        <label htmlFor="username">Usuário: </label>
                        <div>
                            <input type="text" onChange={handleChangeUsername} value={username} placeholder="Digite o seu usuário" name="username" />
                        </div>
                    </div>
                    <div className="inputFormatacao">
                        <label htmlFor="password">Senha: </label>
                        <div>
                            <input type={typeInput} onChange={handleChangePassword} value={password} placeholder="Digite a sua senha" name="password" />
                            <FontAwesomeIcon onClick={handleOnClick} icon={icon} className="icon-eye" />
                        </div>
                    </div>
                    <button onClick={login}>Logar</button>
                </section>
            </main>
        </>
    )
}