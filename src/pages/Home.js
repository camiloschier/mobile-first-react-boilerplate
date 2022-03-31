import React from 'react'
import { Card } from '../components/Card/Card'
import { Link } from 'react-router-dom'
import { Input } from '../components/Input/Input'
export const Home = () => {

    return (
         <>
        <div className='flex-center-column gap-sm test'>
            <h1 className='title'> Bienvenida!</h1>
            <p className='text-center'> Centro Atencion Post Guardia para Babys </p>
            <p className="text"></p>

            <Card >
                <h4  style={{color : 'var(--color-gray-700)'}}>Recuperar credenciales</h4>
                <p className='color-gray-500 my-md font-default'>Por favor, introduzca su direccion de correo electronico para proceder a la recuperacion de credenciales.  </p>
                <input className='color-gray-500 my-lg font-default flex-center-row'style={{'width':'100%'}} placeholder='email@email.com'></input>
                <Link className='color-gray-400 logo' to={{ pathname:'/components',state: { fromDashboard: true }}} > <button className='button-ghost-2xl my-xs'>Recuperar</button></Link>
                
            </Card>
            
        </div>
        <div className="content content--fox">
				<div className="fox">
					<div className="fox-body">
						<div className="fox-front-leg"></div>
						<div className="fox-front-leg"></div>
					</div>
					<div className="fox-head">
						<div className="fox-face">
							<div className="fox-ears">
								<div className="fox-ear"></div>
								<div className="fox-ear"></div>
							</div>
							<div className="fox-skull"></div>
							<div className="fox-front"></div>
							<div className="fox-eyes"></div>
							<div className="fox-nose"></div>
						</div>
					</div>
					<div className="fox-tail">
						<div className="fox-tail">
							<div className="fox-tail">
								<div className="fox-tail">
									<div className="fox-tail">
										<div className="fox-tail">
											<div className="fox-tail">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
					<defs>
						<filter id="squiggly-0">
							<feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
							<feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="2" />
						</filter>
						<filter id="squiggly-1">
							<feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
							<feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
						</filter>
						<filter id="squiggly-2">
							<feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
							<feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
						</filter>
						<filter id="squiggly-3">
							<feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
							<feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
						</filter>
						<filter id="squiggly-4">
							<feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
							<feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
						</filter>
					</defs>
				</svg>
			</div>
            </>
    )
}
