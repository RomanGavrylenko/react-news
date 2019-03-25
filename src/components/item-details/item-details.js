import React from 'react';

export default function ItemDetails({data, children}){
    return(
        <div className='item-details'>
            {
                React.Children.map(children, (child)=>{
                    return React.cloneElement(child, {data});
                })
            }
        </div>
    );
}