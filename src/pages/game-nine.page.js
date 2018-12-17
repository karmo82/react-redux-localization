import React, { Component } from 'react';
import GameContainer from '../containers/game/game.container';
import { Translate } from "react-localize-redux";

class GameNinePage extends Component {

    render() {
        console.log("game nine loaded");
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1 className="display-3"><Translate id="GameNine.PageTitle"></Translate></h1>                    
                </div>

                <div className="row">
                    <div className="col-12">
                        <GameContainer></GameContainer>
                    </div>
                </div>
            </div>

        );
    }
}

export default GameNinePage;