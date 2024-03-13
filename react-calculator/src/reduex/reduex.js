
import ACTIONS from "./actions";
const evaluate = state => {
    let {lastOperand, currentOperand, operation} = state;
    let last = parseFloat(lastOperand);
    let current = parseFloat(currentOperand);

    let res = "";
    switch(operation) {
        case '+':
            res = last + current;
            break;
        case '-':
            res = last - current;
            break;
        case '÷':
            res = last / current;
            break;
        case '*':
            res = last * current;
            break;
        default:
            break;
    }
    return res.toString();
}



const reducer = (state = {
    lastOperand: "",
    currentOperand: "",
    operation: "",
    userd: false,
}, action) => {
    switch (action.type) {
        case ACTIONS.ADD_DIGIT:
            if (state.userd)
                return {
                    ...state,
                    currentOperand: action.digit,
                    userd: false
                }
            if (state.currentOperand === '0' && action.digit === '0')
                return state;
            if (state.currentOperand === '0' && action.digit !== '.')
                return {
                    ...state, currentOperand:action.digit
                }
            if (state.currentOperand === "" && action.digit === '.')
                return { ...state, currentOperand: "0."}
            if (state.currentOperand.includes('.') && action.digit === '.') 
                return state;
            return {
                ...state, currentOperand: state.currentOperand + action.digit
            }
        case ACTIONS.DELETE_DIGIT:
            if (state.userd) return {
                ...state,
                currentOperand: "",
                userd: false,
            }
            if (state.currentOperand === "")
                return state;
            return {
                ...state, currentOperand: state.currentOperand.slice(0, -1),
            }
        case ACTIONS.CHOOSE_OPERATION:
            if (state.lastOperand === "" && state.currentOperand === "") return state;
            if (state.lastOperand === "") 
                return {
                    ...state,
                    lastOperand: state.currentOperand,
                    currentOperand: "", 
                    operation: action.operation,
                }
            if (state.currentOperand === "") 
                return {
                    ...state,
                    operation: action.operation,

                }
            return {
                ...state,
                lastOperand: evaluate(state),
                operation: action.operation,
                currentOperand: "",
            }
        case ACTIONS.CLEAR:
            return {
                ...state,
                currentOperand: "",
                lastOperand: "",
                operation: "",
                userd: false,
            }
        case ACTIONS.EVALUATE:
            return {
                ...state,
                lastOperand: evaluate(state),
                currentOperand: "",
                operation: "",
                userd: true,
            }
        default:
            return state
    }
}

export default reducer;