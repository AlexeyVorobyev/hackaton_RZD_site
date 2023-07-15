import { Link, Outlet } from 'react-router-dom';
import logoImg from './assets/rzd__ 1.png'
import footerLogoImg from './assets/rzd_____2.png'

const Layout = () => {
    return (
        <>
            <header className='header'>
                <div className="header_logo">
                    <img className="header_logoImg" src={logoImg}/>
                </div>
                <div className="header_linkContainer">
                    <Link className="header_link" to="mainPage">Главная</Link>
                </div>
            </header>
            
            <Outlet />

            <footer className="footer">
                <div className="footer_logo">
                    <img className="footer_logoImg" src={footerLogoImg}/>
                </div>
            </footer>
        </>
    )
}

export {Layout}