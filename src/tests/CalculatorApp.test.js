import { shallow } from "enzyme";
import { CalculatorApp } from "../CalculatorApp";

describe('Pruebas en <CalculatorApp />',  ()=> {

    const wrapper = shallow(<CalculatorApp />);
    test('El componente debe renderizarse correctamente', ()=>{
        expect(wrapper).toMatchSnapshot();
    });
    test('El componente <Keyboard /> debe existir', () => {
        const keyboard = wrapper.find('Keyboard');
        expect(keyboard.exists()).toBeTruthy();
    });
    test('El componente <InputDisplay /> debe existir', () => {
        const inputDisplay = wrapper.find('InputDisplay');
        expect(inputDisplay.exists()).toBeTruthy();
    });
});