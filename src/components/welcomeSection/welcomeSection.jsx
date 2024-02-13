import './welcomeSection.scss'

function WelcomeSection(props) {
    return (
        <div className="welcomeSection" key={props.title}>
            <img className="welcomeSection__img" src={props.image} alt="welcome" />
            <h1 className="welcomeSection__text">{props.title}</h1>
        </div>
    )
}
export default WelcomeSection