import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header className='header'>
                <div className="header_logo ">Лого</div>
                <div className="header_linkContainer">
                    <Link className="header_link" to="what">Уведомления</Link>
                    <Link className="header_link" to="cabinet/mainPanel">Кабинет</Link>
                    <Link className="header_link" to="what">Услуги</Link>
                    <Link className="header_link" to="what">Помощь</Link>
                </div>
            </header>
            
            <main className="container">
                <Outlet />
            </main>

            <footer className="container">2021</footer>
        </>
    )
}

export {Layout}