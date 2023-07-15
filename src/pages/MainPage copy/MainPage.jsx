import background from './assets/back.png';
import { Form } from '../../components/FormMain/Form';

const MainPage = () => {
    return (
        <div className='MainPage_container'>
            <section className='choosePath_container'>
                <img className='choosePath_img' src={background}/>
                <Form page={"main"}/>
            </section>
        </div>
    )
}

export {MainPage}

