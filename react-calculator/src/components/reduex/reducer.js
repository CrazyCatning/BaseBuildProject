import ACTIONS from "./action";


const evaluate = (state) => {
    let {lastOperand, currentOperand, operation} = state;
    let last = parseFloat(lastOperand);
    let current = parseFloat(currentOperand);
    let res = "";
    switch(operation) {
        case '÷':
            res =  last / current;
            break;
        case '+':
            res =  last + current;
            break;
        case '-':
            res =  last - current;
            break;
        case '*':
            res =  last * current;
            break;
        default:
            break;
    }

    return res.toString()
}

const reducer = (state = {
    lastOperand: "",
    currentOperand: "",
    operation: "",
    overwrite: false,
}, action) => {
    switch(action.type) {
        case ACTIONS.ADD_DIGIT:
            if (state.overwrite) return {...state, currentOperand: action.digit, lastOperand: "", operation: "", overwrite: false}
            if (state.currentOperand === '0' && action.digit === '0') return state;
            if (state.currentOperand === '0' && action.digit !== '.') return {...state, currentOperand: action.digit};
            if (state.currentOperand.includes('.') && action.digit === '.') return {...state}
            if (state.currentOperand === "" && action.digit === '.') return {...state, currentOperand: "0."};
            return {...state, currentOperand: state.currentOperand + action.digit};

        case ACTIONS.DELETE_DIGIT:
            if (state.currentOperand === "") return {...state } ;
            if (state.currentOperand !== "") return {...state, currentOperand: state.currentOperand.slice(0, -1)};
        case ACTIONS.CLEAR:
            return {...state, lastOperand: "", operation: "", currentOperand: ""};
        case ACTIONS.CHOOSE_OPERATION:
            if (state.lastOperand === "" && state.currentOperand === "") return { ...state, operation: "" };
            if (state.lastOperand === "" && state.currentOperand !== "") return {...state, lastOperand: state.currentOperand, operation: action.operation, currentOperand: ""};
            if (state.currentOperand === "" && state.lastOperand !== "") return {...state, operation: action.operation};
            if (state.currentOperand !== "" && state.lastOperand !== "") return {...state,lastOperand: evaluate(state), currentOperand: "", operation: action.operation};
        case ACTIONS.EVAULATE:
            if (state.currentOperand === "" || state.lastOperand === "" || state.operation === "") return state;
            return {...state, lastOperand: evaluate(state), currentOperand: "", operation:"", overwrite: true};
        default:
            return state;
    }
}

export default reducer;