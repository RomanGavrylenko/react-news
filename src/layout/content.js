import React from 'react';

export default function Content({leftOne, leftTwo, leftThree, main }){
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    {leftOne}
                    {leftTwo}
                    {leftThree}
                </div>
                <div className='col-md-9'>
                    {main}
                </div>
            </div>
        </div>
    );
} 