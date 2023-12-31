import React from 'react';
import './Sidenav.css'

const Sidenav = ({title}) => {
    return(
        <div className='nav'>
            <h1>{title}</h1>
        </div>
    )
}
export default Sidenav;