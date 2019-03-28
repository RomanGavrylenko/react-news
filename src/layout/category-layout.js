import React from 'react';
import ItemList from '../components/item-list/item-list';
import ItemDetails from '../components/item-details/item-details';
import ErrorBoundry from '../error-boundry/error-boundry';

function CategoryLayout({news, chooseInd, ind, name, children, getName, itemName, accordionOpen, accordionOpenTitle}){
        
    return(
            <div className='category-layout'>
                <h3 
                    className='category-layout__header' 
                    data-title={name}
                    onClick={accordionOpen}
                >
                    {name}
                </h3>
                { accordionOpenTitle === name &&
                    <div className='category-layout__content'>
                        <ErrorBoundry>
                        <div className='category-layout__part category-layout__part_left'>
                            <ItemList 
                                data={news}
                                chooseItem = {chooseInd}
                                getName={getName}
                                name={itemName}/>
                        </div>
                        <div className='category-layout__part category-layout__part_right'>
                            <ItemDetails data={news[ind]}>
                                {children}
                            </ItemDetails>
                        </div>
                        </ErrorBoundry>
                    </div>  
                }  
            </div>
    );
}

export default CategoryLayout;