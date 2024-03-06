
import logo from '../img/Logo.svg'

import '../styles/header.scss';

export const Header = () => {
    return(
        <div className="header">
            <img src={logo} alt='Logo' className="header__logo"/>
            <img className="header__telegram__link"/>
        </div>
    );
}