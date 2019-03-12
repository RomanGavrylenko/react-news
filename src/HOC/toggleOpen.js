import React from 'react';
import {getDisplayName} from './getDisplayName';

export default function toggleOpen(OriginComponent){
    class ToggleOpen extends React.Component{
        state={
            isOpen: false,
        }

        handleOpen = ()=>{
            this.setState(state=>({
                isOpen: !state.isOpen,
            }));
        }

        render(){
            return(
                <OriginComponent 
                    {...this.state}
                    {...this.props}
                    toggleOpen={this.handleOpen}
                />
            );
        }
    }

    ToggleOpen.displayName = `ToggleOpen(${getDisplayName(OriginComponent)})`;

    return ToggleOpen;
}