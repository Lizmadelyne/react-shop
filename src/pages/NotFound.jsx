import React from 'react';
import '../styles/NotFound.scss';

const NotFound =() =>{
    return(
        <div className='not-found-container'>
           <h1 className='number-error'>404</h1>
           <p className='message'>This is no the page you are looking for.</p>
           <button className='not-found-btn'>Get back</button>
        </div>

    );
}
export { NotFound };