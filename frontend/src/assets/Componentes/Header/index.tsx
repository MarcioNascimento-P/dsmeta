import head from '../../img/header.svg'
import './styles.css'

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">

                    <img src={head}alt="DSMETA" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://github.com/MarcioNascimento-P" target="_blank">@MarcioNascimento-P</a>
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header