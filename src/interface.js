import React, { useState } from 'react';
import waldo1 from './assets/images/waldo1.jpg'


function Interface (dimensions, pictureid) {
    return (
        <div>
        <img src={waldo1} alt='' className='waldoimg'></img>
        </div>
    )
}

export default Interface;