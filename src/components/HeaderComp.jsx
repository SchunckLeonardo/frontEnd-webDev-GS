import logoImg from "../assets/aceleraSUS.png"

export default function HeaderComp() {
    return (
        <>
            <header className="header-comp">
                <div className="logo">
                    <img src={logoImg} alt="Logo da empresa AceleraSUS" />
                    <h3>AceleraSUS</h3>
                </div>
                <h4>Global Solution 2023 - Engenharia de Software</h4>
            </header>
        </>
    )
}