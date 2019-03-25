import React from 'react';


export default class ItemList extends React.Component{
   
    _getItems = ()=>{

        const {data, name, chooseItem} = this.props;

        return data.map((item, i)=>{
            return <li 
                        key={item.publishedAt} 
                        className='item-list__single'
                        onClick={()=>{chooseItem(i)}}>{item[name]}</li>
        })
    }

    render(){

        return( 
            <ul className='item-list custom-shadow'>
                {this._getItems()}
            </ul>
        )
    }
}
