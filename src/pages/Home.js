import React from 'react'
import { Card } from '../components/Card/Card'
import { Link } from 'react-router-dom'
import { Input } from '../components/Input/Input'
import Modal from 'react-modal';
import { Fox } from '../components/Fox';


export const Home = () => {
    let subtitle
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
      <Fox/>
            
            <div className='flex-center-column gap-sm test'>
                <h1 className='title'> Bienvenida!</h1>
                <h1 className='title-introduction'> Centro Atencion Post Guardia para Babys </h1>

                <Link to={{pathname:'/recover'}}>
                    <button className='button-solid-lg' onClick={openModal} style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>Recuperar credenciales</button>
                </Link>

                {/* <Card >
                <h4  style={{color : 'var(--color-gray-700)'}}>Recuperar credenciales</h4>
                <p className='color-gray-500 my-md font-default'>Por favor, introduzca su direccion de correo electronico para proceder a la recuperacion de credenciales.  </p>
                <input className='color-gray-500 my-lg font-default flex-center-row'style={{'width':'100%'}} placeholder='email@email.com'></input>
                <Link className='color-gray-400 logo' to={{ pathname:'/components',state: { fromDashboard: true }}} > <button className='button-ghost-2xl my-xs'>Recuperar</button></Link>
                
            </Card> */}
            
            </div>
            
        </>
    )
}
