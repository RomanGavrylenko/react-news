import React from 'react';
import ErrorBoundry from '../../error-boundry/error-boundry';


export default class ItemList extends React.Component{

    static defaultProps = {
        data: [],
    }
   
    _getItems = ()=>{

        const {data, chooseItem, children} = this.props;

        return data.map((item, i)=>{
            return <li 
                        key={item.publishedAt} 
                        className='item-list__single'
                        onClick={()=>{chooseItem(i)}}>{children(item)}</li>
        })
    }

    render(){

        return( 
            <ErrorBoundry>
                <ul className='item-list custom-shadow'>
                    {this._getItems()}
                </ul>
            </ErrorBoundry>
        )
    }
}
