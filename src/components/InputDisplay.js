import React from 'react';
import PropTypes from 'prop-types';

export const InputDisplay = ({ value }) =>{
    return(
        <input
            type="text"
            className='form-control'
            value={value.join('')}
            disabled
        />
    );
}
InputDisplay.propTypes = {
    value: PropTypes.array.isRequired,
}