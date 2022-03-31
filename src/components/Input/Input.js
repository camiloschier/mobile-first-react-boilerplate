import React from 'react'

export const Input = (props) => {
    
    return (
        <input className='flex-start-column flex-space-between' {...props} >
            {props.children}
        </input>
    )
}
