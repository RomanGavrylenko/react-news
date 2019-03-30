import React from 'react';
import ErrorBoundry from '../error-boundry/error-boundry';
import {AccordionConsumer} from '../context-api/accordion-context';
import withContext from '../hoc/with-context';



function SectionLayout({left, right,  name, openAccordion, openTitle }){
    return(  
        <div className='category-layout'>
            <h3 
                className='category-layout__header' 
                data-title={name}
                onClick={openAccordion}
            >
                {name}
            </h3>
            { openTitle === name &&
                <div className='category-layout__content'>
                    <ErrorBoundry>
                    <div className='category-layout__part category-layout__part_left'>
                        {left}
                    </div>
                    <div className='category-layout__part category-layout__part_right'>
                        {right}
                    </div>
                    </ErrorBoundry>
                </div>  
            }  
        </div>
    );
}

export default withContext(SectionLayout, AccordionConsumer);