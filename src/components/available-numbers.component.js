import React from 'react';

const AvailableNumbersComponent = (props) => {
    
    const isDisabled = (number) => {
        if(props.selectedNumbers.indexOf(number) >= 0){
            return true;
        }
        return false;        
    }

    const getButtonClass =(number) => {
        if(props.selectedNumbers.indexOf(number) >= 0){
            return "btn btn-danger";
        }
        return "btn btn-default";
    }

    return (
        <div>
            {props.availableNumbers.map((x, i) => <button key={i} onClick={() => props.handleOnAvailableClick(x)} disabled={isDisabled(x)} className={getButtonClass(x)} >{x}</button>)}
        </div>
    );
};

export default AvailableNumbersComponent;