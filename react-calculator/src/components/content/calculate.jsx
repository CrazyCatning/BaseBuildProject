import React, { Component } from 'react';
import ContentBase from './Contentbase';
import DigitButton from './calculator/digitButton';
import { connect } from 'react-redux';
import ACTIONS from '../reduex/action';
import OperationButton from './calculator/operationButton';
class Calculate extends Component {
    state = {}
    render() {
        return (
            <ContentBase>
                <div className="calculator">
                    <div className="output">
                        <div className="lastput">
                            {this.props.lastOperand} {this.props.operation}
                        </div>
                        <div className="currentput">
                            {this.props.currentOperand}
                        </div>
                    </div>

                    <button className='button-ac'>AC</button>
                    <button onClick={this.props.delete_digit}>DEL</button>
                    <OperationButton operation={"÷"} />
                    <DigitButton digit={"7"} />
                    <DigitButton digit={"8"} />
                    <DigitButton digit={"9"} />
                    <OperationButton operation={"*"} />
                    <DigitButton digit={"4"} />
                    <DigitButton digit={"5"} />
                    <DigitButton digit={"6"} />
                    <OperationButton operation={"-"} />
                    <DigitButton digit={"1"} />
                    <DigitButton digit={"2"} />
                    <DigitButton digit={"3"} />
                    <OperationButton operation={"+"} />
                    <DigitButton digit={"0"} />
                    <DigitButton digit={"."} />
                    <button className='button-equ'>=</button>
                </div>
            </ContentBase>
        );
    }
}

const mapStateToProps = (state, action) => {
    return {
        currentOperand: state.currentOperand,
        lastOperand: state.lastOperand,
        operation: state.operation
    }
}

const mapDispatchToProps = {
    delete_digit: () => {
        return {
            type: ACTIONS.DELETE_DIGIT,
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Calculate);