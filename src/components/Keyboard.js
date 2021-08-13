import React from 'react';
import PropTypes from 'prop-types';

export const Keyboard = ({ handleOnClickNumber, handleOnClickOperation, handleOnReset, handleOnResolve })=>{

    const btnNumber = [1,2,3,4,5,6,7,8,9,0];
    const operations = ['+', '-', '/', '*'];

    return(
    <div className='flex flex-wrap'>
        <div className='row w-100'>
            <div className='col-6 number__pad'>
                {
                    btnNumber.map(number =>(
                        <button
                            className='btn btn-lg btn-success'
                            key={number}
                            onClick={ ()=> handleOnClickNumber( number ) }
                        >
                            {number}
                        </button>
                    ))
                }
            </div>
            <div className='col-6 operation__pad'>
                <button 
                    className='btn btn-lg btn-warning'
                    onClick={ handleOnReset }
                >
                    CE
                </button>
                <button 
                    className='btn btn-lg btn-danger'
                    onClick={ handleOnResolve }
                >
                    =
                </button>
                {
                    operations.map(symbol => (
                        <button
                            className='btn btn-lg btn-light'
                            key={symbol}
                            onClick={ ()=> handleOnClickOperation(symbol) }
                        >
                            {symbol}
                        </button>
                    ))
                }
            </div>
        </div>
    </div>
    );
}
Keyboard.propTypes = {
    handleOnClickNumber: PropTypes.func.isRequired,
    handleOnClickOperation: PropTypes.func.isRequired,
    handleOnReset: PropTypes.func.isRequired,
    handleOnResolve: PropTypes.func.isRequired,
}