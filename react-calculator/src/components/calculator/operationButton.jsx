import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../../reduex/actions';

class OperationButton extends Component {
    state = {  } 
    render() { 
        return (
            <button onClick={() => {this.props.choose_operation(this.props.operation)}}>{this.props.operation}</button>
        );
    }
}

const mapDispatchToProps = {
    choose_operation: opreation => {
        return {
            type: ACTIONS.CHOOSE_OPERATION,
            operation: opreation,
        }
    }
}
 
export default connect(null, mapDispatchToProps)(OperationButton);