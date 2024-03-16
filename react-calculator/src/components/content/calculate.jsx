import React, { Component } from 'react';
import ContentBase from './Contentbase';
import DigitButton from './calculator/digitButton';
import OperationButton from './calculator/operationButton';
import { connect } from 'react-redux';
import ACTIONS from '../reduex/action';
class Calculate extends Component {
    state = {
        formater: Intl.NumberFormat('en-us')
    }
    format = number => {
        if (number === "") return "";
        const [integer, decimal] = number.split('.');
        if (decimal === undefined)
            return this.state.formater.format(integer);
        return `${this.state.formater.format(integer)}.${decimal}`
    }

    render() {
        return (
            <ContentBase>
                <div className="calculator">
                    <div className="output">
                        <div className="lastput">{this.format(this.props.lastOperand)}{this.props.operation}</div>
                        <div className="currentput">{this.format(this.props.currentOperand)}</div>
                    </div>
                    <button onClick={this.props.clear} className='button-ac'>AC</button>
                    <button onClick={this.props.delete_digit} className='button-delete'>DEL</button>
                    <OperationButton operation={"÷"} />
                    <DigitButton digit={"7"}/>
                    <DigitButton digit={"8"}/>
                    <DigitButton digit={"9"}/>
                    <OperationButton operation={"*"} />
                    <DigitButton digit={"4"}/>
                    <DigitButton digit={"5"}/>
                    <DigitButton digit={"6"}/>
                    <OperationButton operation={"-"} />
                    <DigitButton digit={"1"}/>
                    <DigitButton digit={"2"}/>
                    <DigitButton digit={"3"}/>
                    <OperationButton operation={"+"} />
                    <DigitButton digit={"0"}/>
                    <DigitButton digit={"."}/>
                    <button onClick={this.props.evaluate} className='button-equ'>=</button>
                </div>
            </ContentBase>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        currentOperand: state.currentOperand,
        lastOperand: state.lastOperand,
        operation: state.operation,
    }  
}

const mapDispatchToProps = {
    clear: () => {
        return {
            type: ACTIONS.CLEAR
        }
    },
    delete_digit: () => {
        return {
            type: ACTIONS.DELETE_DIGIT,
        }
    },
    evaluate: () => {
        return {
            type: ACTIONS.EVAULATE
        }
    }

}






export default connect(mapStateToProps, mapDispatchToProps)(Calculate);