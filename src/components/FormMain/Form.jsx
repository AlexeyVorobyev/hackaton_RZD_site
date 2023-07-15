import React from "react"
import { Selects } from "../Selects/Selects"
import { Navigate } from "react-router-dom"
import {getData} from '../../fetch'

const Form = () => {

    const [routeHook,setRouteHook] = React.useState(false)

    const selectData = {
        "from":{value:'1', label:'1'},
        "to":{value:'1', label:'1'},
        "when":{value:'1', label:'1'}
    }

    return (
        <form className='form'> 
            <h2 className='form_title'>Выбрать направление</h2>
            <div className='form_container'>
                <Selects selectData={selectData}/>
                <button className='form_button child' onClick={(event) => {
                    event.preventDefault();
                    setRouteHook(true)
                    getData(selectData)
                }}>
                    <p className='form_buttonText'>НАЙТИ</p>
                </button>
                {routeHook && (
                    <Navigate to="/adminPage"/>
                )}
            </div>
        </form>
    )
}

export {Form}