import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function Login() {

    let [icon, setIcon] = useState("fa-eye")
    let [typeInput, setTypeInput] = useState("password")

    const handleOnClick = () => {
        if (icon == "fa-eye") {
            setTypeInput("text")
            setIcon("fa-eye-slash")
        } else {
            setTypeInput("password")
            setIcon("fa-eye")
        }
    }

    return (
        <>
            <main className="allPage">
                <section className="loginBox">
                    <h2>Entre para ver o projeto</h2>
                    <div className="inputFormatacao">
                        <label htmlFor="username">Usuário: </label>
                        <div>
                            <input type="text" placeholder="Digite o seu usuário" name="username" />
                        </div>
                    </div>
                    <div className="inputFormatacao">
                        <label htmlFor="password">Senha: </label>
                        <div>
                            <input type={typeInput} placeholder="Digite a sua senha" name="password" />
                            <FontAwesomeIcon onClick={handleOnClick} icon={icon} className="icon-eye" />
                        </div>
                    </div>
                    <button>Logar</button>
                </section>
            </main>
        </>
    )
}