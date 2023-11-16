import logoImg from "../assets/aceleraSUS.png"

export default function HeaderComp() {
    return (
        <>
            <header>
                <div>
                    <h3>AceleraSUS</h3>
                    <img src={logoImg} alt="Logo da empresa AceleraSUS" />
                </div>
                <h4>Global Solution 2023 - Engenharia de Software</h4>
            </header>
        </>
    )
}