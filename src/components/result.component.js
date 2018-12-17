import React from 'react';

const ResultComponent = (props) => {

    var result = null;
    if(props.isCorrect !== null){
        if(props.isCorrect === false){
            result = <div className="alert alert-danger">
                        Risposta sbagliata! capra!!               
                    </div>
        }
        else{
            result = <div className="alert alert-success">
                        Bravo! sai contare! 
                        <i className="fa fa-smile-o"></i>
                    </div>
        }
    }

    return (
        <div>
            {result}
        </div>
    );
};

export default ResultComponent;