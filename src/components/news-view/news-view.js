import React from 'react';
import Field from '../field/field';
import Link from '../link/link';

const NewsLook = ({data})=>{
    return(
        <React.Fragment>
            <Field data={data} fieldName='title'/>
            <Field data={data} fieldName='description'/>
            <Link 
                data={data}
                fieldName='url'
                label='Перейти к новости'/>
        </React.Fragment>
    );
}

export default NewsLook;