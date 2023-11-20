import { useNavigate } from "react-router"
import logoImg from "../assets/aceleraSUS.png"
import { useEffect, useState } from "react"

export default function HeaderComp() {

    const navigate = useNavigate()

    const name = sessionStorage.getItem("name")
    const username = sessionStorage.getItem("username")
    const password = sessionStorage.getItem("password")

    let sessionStorageEmpty = username != "" && password != ""
    let sessionStorageNull = username == null && password == null

    let [emailUser, setEmailUser] = useState(username)
    let [nameUser, setNameUser] = useState(name)

    useEffect(() => {
        if (!sessionStorageEmpty || !sessionStorageNull) {
            setEmailUser(username)
            setNameUser(name)
            navigate("/infos")
        } else {
            setEmailUser("")
            setNameUser("")
            navigate("/login")
        }

    }, [name, navigate, sessionStorageEmpty, sessionStorageNull, username])

    return (
        <>
            <header className="header-comp">
                <div className="logo">
                    <img src={logoImg} alt="Logo da empresa AceleraSUS" />
                    <h3>AceleraSUS</h3>
                </div>
                <p>
                    {emailUser} {nameUser}
                </p>
                <h4>Global Solution 2023 - Engenharia de Software</h4>
            </header>
        </>
    )
}