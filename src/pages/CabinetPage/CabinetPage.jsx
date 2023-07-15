import { Link, Outlet } from 'react-router-dom';

const CabinetPage = () => {
    return (
        <div className='CabinetPage_grid'>
            <section className="menu">
                <Link index className="menu_link" to="mainPanel">Главная панель</Link>
                <Link className="menu_link">Погодные условия</Link>
                <Link className="menu_link">Стоимость билетов</Link>
                <Link className="menu_link">Дорожные работы</Link>
                <Link className="menu_link">Анализ цен</Link>
            </section>

            <main className="container CabinetPage_container">
                <Outlet/>
            </main>
        </div>
    )
}

export {CabinetPage}

