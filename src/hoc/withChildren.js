import React from 'react';

//for a more convenient recording of the component's children functions

export default function withChildren(Component, fn){
    return (props)=>{
        return  <Component {...props}>
                    {fn}
                </Component>
    }
}