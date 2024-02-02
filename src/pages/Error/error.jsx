import { Link } from 'react-router-dom'
import '../../styles/errorPage.scss'

function Error() {
    return (
        <div className='errorPage'>
            <h1 className='errorPage__number'>404</h1>
            <h3 className='errorPage__text'>Oups! La page que vous demandez n'existe pas</h3>
            <Link to="/" className='errorPage__link'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error