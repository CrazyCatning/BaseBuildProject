
import ACTIONS from "./action";

const reducer = (state = {
    lastOperand: "",
    currentOperand: "",
    operation: "",
}, action) => {
    switch (action.type) {
        case ACTIONS.ADD_DIGIT:
            if (state.currentOperand === '0' && action.digit === '0') {
                return {
                    ...state
                }
            }
            if (state.currentOperand === "" && action.digit !== '.') {
                return {
                    ...state, currentOperand: action.digit
                }
            }
            if (action.digit === '.' && state.currentOperand.includes('.')) {
                return {
                    ...state
                }
            }

            if (action.digit === '.' && state.currentOperand === "") {
                return {...state, currentOperand: "0."}
            }

            return {...state, currentOperand: state.currentOperand + action.digit }

        case ACTIONS.DELETE_DIGIT: {
            if (state.currentOperand === "") {return state}
            return {
                ...state, currentOperand: state.currentOperand.slice(0, -1)
            }
        }
        case ACTIONS.CHOOSE_OPERATION: 
            if (state.lastOperand === "" && state.currentOperand === "") {
                return state;
            }
            if (state.lastOperand === "") {
                return {
                    ...state,
                    lastOperand: state.currentOperand,
                    operation: action.operation,
                    currentOperand: "",
                }
            }
            return {
                ...state, operation: action.operation
            }

        default:
            return state;
    }

}


export default reducer;