import React, { Component } from 'react';
import StarsComponent from '../../components/stars.component';
import ButtonsComponent from '../../components/bottons.component';
import SelectedNumbersComponent from '../../components/selected-numbers.component';
import AvailableNumbersComponent from '../../components/available-numbers.component';
import * as _ from 'lodash';
import ResultComponent from '../../components/result.component';

class GameContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stars: _.range(1, _.random(1, 9) + 1),
            availableNumbers: _.range(1, 10),
            selectedNumbers: [],
            isCorrect: null
        };
    }

    handleOnAvailableClick = (number) => {
        console.log("click catched by container!");
        console.log(number);
        this.setState({
            selectedNumbers: this.state.selectedNumbers.concat(number)
        });
    }

    handleOnResetClick = () => {
        this.setState({
            availableNumbers: _.range(1, 10),
            stars: _.range(1, _.random(1, 9) + 1),
            selectedNumbers: [],
            isCorrect: null
        });
    }

    handleOnCheckResultClick = () => {

        var sum = _.sum(this.state.selectedNumbers);
        console.log("sum: " + sum);
        console.log(this.state.stars);

        if (sum === this.state.stars.length) {
            console.log("isCorrect");
            this.setState({
                isCorrect: true
            });
        }
        else {
            console.log("is not correct");
            this.setState({
                isCorrect: false
            });
        }
    }

    render() {
        var { availableNumbers, selectedNumbers } = this.state;

        return (
            <div className="container">
                <div className="panel">
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-5">
                                <StarsComponent stars={this.state.stars}></StarsComponent>
                            </div>
                            <div className="col-2">
                                <ButtonsComponent handleOnResetClick={this.handleOnResetClick} handleOnCheckResultClick={this.handleOnCheckResultClick} ></ButtonsComponent>
                            </div>
                            <div className="col-5">
                                <SelectedNumbersComponent selectedNumbers={this.state.selectedNumbers} ></SelectedNumbersComponent>
                            </div>
                        </div>
                        <div className="row" style={{ paddingTop: 10 }}>
                            <div className="col-12 text-center">
                                <AvailableNumbersComponent
                                    availableNumbers={availableNumbers}
                                    selectedNumbers={this.state.selectedNumbers}
                                    handleOnAvailableClick={this.handleOnAvailableClick} ></AvailableNumbersComponent>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ResultComponent isCorrect={this.state.isCorrect} ></ResultComponent>
                            </div>

                        </div>
                    </div>

                </div>


            </div>

        );
    }
}

export default GameContainer;