import React from "react"
import { Selects } from "../Selects/Selects"
import { Navigate } from "react-router-dom"

const Form = () => {

    const selectData = {
        "from":{value:'1', label:'1'},
        "to":{value:'1', label:'1'},
        "when":{value:'1', label:'1'}
    }

    return (
        <form className='form'> 
            <div className='form_container'>
                <Selects selectData={selectData}/>
                <button className='form_button child' >
                    <p className='form_buttonText'>НАЙТИ</p>
                </button>
            </div>
        </form>
    )
}

export {Form}