import React from 'react';

function Projects() {
    
    return(
        <div className='body'>
            <h1 align='center' className='title'>Projects</h1>
{/*             <div className='row'>
                <div className='col-3 mt-5'> */}
                    <div id='twitch-card' className='card'>
                        <img className='card-img-top' id='twitch-card-pic' src={require('../assets/twitch.png')} alt='twitch logo'/>
                        <div className='card-body'>
                            <h5 className='card-title'>Twitch Leaderboard</h5>
                        </div>
                    </div>
                </div>
/*             </div>
        </div> */
    )
}

export default Projects