import { logements } from "../../datas/logements" 
import "./logementsList.scss"
import beach from "../../assets/beach.png"
import WelcomeSection from '../welcomeSection/welcomeSection'

function LogementsList() {
    const welcomeTitle = 'Chez vous, partout et ailleurs'
    return (
        <div className="homePage" key={"homePage"}>
            <WelcomeSection image={beach} title={welcomeTitle}/>
            <ul className="logementsList" key={'logementsList'}>
                {logements.map((bien) => (
                    <a href={"/logement/" + bien.id} key={'a'+ bien.id}>
                        <li className="logementsList__element" key={ bien.id }>
                            <img className="logementsList__element--img" src={ bien.cover } alt ={ bien.title }/>
                            <h2 className="logementsList__element--text"> {bien.title} </h2>
                        </li>
                    </a>
                ))}
            </ul>
        </div>
    )
}

export default LogementsList