import React from 'react';

//for context transfer

export default function withContext(Wrapped, Context){
    return (props)=>{
        return(
            <Context>
                {
                    (value)=>{
                        return (<Wrapped 
                                    {...props}
                                    {...value} />
                                )
                              
                    }
                }
            </Context>
        );
    }
}