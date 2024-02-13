import './footer.scss'
import Logo from '../../assets/logo.svg'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__content'>
                <img src= {Logo} alt='logo' className='footer__content--logo'/>
                <p>© 2024 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer