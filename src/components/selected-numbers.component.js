import React from 'react';

const SelectedNumbersComponent = (props) => {
    console.log("selected numbers");
    console.log(props);
    return (
        <div>
            {props.selectedNumbers.map((x, i) => <button key={i} className="btn btn-default">{x}</button>)}
        </div>
    );
};

export default SelectedNumbersComponent;