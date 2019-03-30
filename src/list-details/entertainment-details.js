import React from 'react';
import ItemDetails from '../components/item-details/item-details';
import Field from '../components/field/field';
import Link from '../components/link/link';

export default function EntertaimentDetails({news}){

    return  <ItemDetails data={news}>
                <Field fieldName='title'/>
                <Field fieldName='description'/>
                <Link 
                    fieldName='url'
                    label='Перейти к новости'/>
            </ItemDetails>
}