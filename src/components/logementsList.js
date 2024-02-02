import { logements } from "../datas/logements" 
import "../styles/logementsList.scss"
import beach from "../assets/beach.png"

function LogementsList() {
    return (
        <div className="homePage">
            <div className="welcomeSection">
                <img className="welcomeSection__img" src={beach} alt="beach" />
                <h1 class="welcomeSection__text">Chez vous, partout et ailleurs</h1>
            </div>
            <ul className="logementsList">
                {logements.map((bien) => (
                    <li className="logementsList__element" key={ bien.id }>
                        <img className="logementsList__element--img" src={ bien.cover } alt ={ bien.title }/>
                        <h1 className="logementsList__element--text"> {bien.title} </h1>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LogementsList