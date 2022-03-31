import React from 'react'
import Quiz from 'react-quiz-component';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card/Card';
import { Fox } from '../components/Fox';
import { quiz } from './quiz';
export const About = () => {
    return (
        <>
      <Fox/>

        <div className='flex-center-column h-sm text-center'>
            <h2 >Queres recuperar tu cuenta? Ingresa tu mail! 🐶 </h2>

        </div>
        <div className='flex-center-column  text-center' style={{}}>
             <Card >
                <p className='color-gray-500 my-md font-default'>Por favor, introduzca su direccion de correo electronico para proceder a la recuperacion de credenciales.  </p>
                <input className='color-gray-500 my-lg font-default flex-center-row'style={{'width':'100%'}} placeholder='email@email.com'></input>             
               
                <Link  className=' color-gray-400 logo' to={{ pathname:'/components',state: { fromDashboard: true }}} > 
                    <button className='button-solid-2xl my-xs'>Recuperar</button>
                </Link>

                
                
            </Card> 
        </div>
        </>
    )
}
