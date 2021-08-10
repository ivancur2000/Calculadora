import React, { useState } from 'react';

export const CalculatorApp = () => {

    const [ operation, setOperation ] = useState([]);
    const [valueInput, setValueInput] = useState([]);
    const btnValues = [1,2,3,4,5,6,7,8,9,0];

    const handleAdd = () => {
        if(valueInput.join('').trim()){
            setOperation([...operation, valueInput.join('')+'+']);
            setValueInput([]);
        }
    }

    const handleResolve = ()=>{
        setOperation([...operation, valueInput.join('')]);
        // let result = eval(operation.join(''));
        // setValueInput([result]);
    }
    console.log(operation.join(''))
    // console.log(operation, eval(operation.join('')) )
    return (
        <>
            <input 
                type="text" 
                value={ valueInput.join('') }
                disabled
            />
            {
                operation.length % 2 === 0  && <p>{ eval(operation.join('')) }</p>
            }
            <div>
            {
                btnValues.map((buttonsValue)=>(
                    <button 
                        onClick={ ()=> setValueInput([...valueInput, buttonsValue]) } 
                        key={ buttonsValue }
                    >
                        { buttonsValue }
                    </button>
                ))
            }
            </div>
            <div>
                <button onClick={ handleAdd  }>+</button>
                {/* <button onClick={  }>-</button>
                <button onClick={  }>*</button>
                <button onClick={  }>/</button> */}
                <button onClick={ handleResolve }>=</button>
            </div> 
        </>
    );
}
