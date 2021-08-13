import { renderHook } from '@testing-library/react-hooks';
import { useCalculate } from '../../hooks/useCalculate';

describe('Pruebas en useCalculator()', () => {
   
    test('Debe retornar  el state array vacio', () => {
        
        const { result } = renderHook( ()=> useCalculate() );
        const { inputValue } = result.current;

        expect(inputValue).toEqual([]);
    });
});