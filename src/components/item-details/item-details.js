import React from 'react';

export default function ItemDetails({data, children}){

    if(!data){
            return <p className='item-details__none'>Нажмите на то, что хотите увидеть более предметно</p>
    }

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