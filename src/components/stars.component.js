import React from 'react';

const StarsComponent = (props) => {
    return (
        <div>
            {
                props.stars.map((x, i) => <i key={i} className="fa fa-star"></i>)
            }
        </div>
    );
};

export default StarsComponent;