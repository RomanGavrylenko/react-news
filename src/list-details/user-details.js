import React from 'react';
import ItemDetails from '../components/item-details/item-details';
import Field from '../components/field/field';
import Image from '../components/image/image';

export default function UserDetails({users}){

    return  <ItemDetails data={users}>
                <Image fieldName='photo' label='ava'/>
                <Field fieldName='name'/>
                <Field fieldName='position'/>
                <Field fieldName='email'/>
            </ItemDetails>
}