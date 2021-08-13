import React from 'react';
import { Keyboard } from "./components/Keyboard";
import { InputDisplay } from "./components/InputDisplay";
import { useCalculate } from './hooks/useCalculate';
import './public/css/CalculatorApp.css';

export const CalculatorApp = ()=>{

    const { 
        inputValue,
        handleOnClickNumber,
        handleOnClickOperation,
        handleOnReset,
        handleOnResolve 
    } = useCalculate();

    return(
        <div className='calculator__content'>
            <h1>Calculator App!!!!</h1>
            <InputDisplay value={inputValue} />
            <Keyboard 
                handleOnClickNumber={handleOnClickNumber} 
                handleOnClickOperation={handleOnClickOperation}
                handleOnReset={handleOnReset}
                handleOnResolve={handleOnResolve}
            />
        </div>
    );
}