import { useState, useEffect } from "react"

export const useCalculate = ()=>{

    const [inputValue, setInputValue] = useState([]);
    const [inputOperation, setInputOperation] = useState([]);

    const result = inputOperation.join('');

    useEffect(() => {
        if(result.length >= 1){
            const lastSymbol = result.substr(-1);
            switch (lastSymbol) {
                case '+':
                case '-':
                case '/':
                case '*':
                    break;
                default:
                    //TODO buscar alternativa a eval
                    const response = eval(result);
                    setInputValue([response.toString()]);
                    break;
            }
        }
    },[result]);

    const handleOnClickNumber = (number)=>{
        setInputValue(()=> [...inputValue, number]);
    }

    const handleOnClickOperation = (symbol)=>{
        if(inputValue.length !== 0){
            setInputOperation([...inputOperation, ...inputValue.join(''), symbol]);
            setInputValue([]);
        }
    }
    
    const handleOnReset = ()=>{
        setInputOperation([]);
        setInputValue([]);
    }

    const handleOnResolve = ()=>{
        if(inputValue.length !== 0){
            setInputOperation([...inputOperation, ...inputValue.join('')]);
        }
    }

    return{
        handleOnClickNumber,
        handleOnClickOperation,
        handleOnResolve,
        handleOnReset,
        inputValue,
    }
}