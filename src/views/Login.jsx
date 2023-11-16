import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Login() {
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
                            <input type="password" placeholder="Digite a sua senha" name="password" />
                            <FontAwesomeIcon icon="fa-eye" className="icon-eye" />
                        </div>
                    </div>
                    <button>Logar</button>
                </section>
            </main>
        </>
    )
}