import { Form } from '../../components/FormAdmin/Form';
import React from 'react';

import {data} from '../../fetch'

const AdminPage = () => {

    console.log(data)
    return (
        <div className='AdminPage_container'>
            <section className='choosePath_container'>
                <Form />
            </section>

            <section className='data_container'>

            </section>
        </div>
    )
}

export {AdminPage}

