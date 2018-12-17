import React from 'react';

const ButtonsComponent = (props) => {
    return (
        <div className="text-center">
            <button className="btn btn-default" onClick={props.handleOnCheckResultClick} >=</button>
            <br></br>
            <br></br>
            <button className="btn btn-warning" onClick={props.handleOnResetClick} >
                <i className="fa fa-times"></i>
            </button>
        </div>
    );
};

export default ButtonsComponent;