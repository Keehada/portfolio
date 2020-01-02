import React from 'react';
import {Jumbotron as Jumbo} from 'react-bootstrap';

function Jumbotron() {

    return(
        <Jumbo fluid className='jumbo text-center'>
            <div className='overlay'></div>
                <h1 id='jumbo-text'>Frank Quijada</h1>
                <h2 id='jumbo-text'>Portfolio</h2>
        </Jumbo>
    )
}

export default Jumbotron;