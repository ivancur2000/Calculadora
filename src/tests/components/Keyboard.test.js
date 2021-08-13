import { shallow } from "enzyme";
import { Keyboard } from "../../components/Keyboard";

describe('Pruebas en <Keyboard />', () => {

    const handleOnClickNumber = jest.fn();
    const handleOnClickOperation = jest.fn();
    const handleOnReset = jest.fn();
    const handleOnResolve = jest.fn();
    const wrapper = shallow(
        <Keyboard 
            handleOnClickNumber={handleOnClickNumber}
            handleOnReset={handleOnReset}
            handleOnClickOperation={handleOnClickOperation}
            handleOnResolve={handleOnResolve}
        />
    );
    const btn = wrapper.find('button');

    test('Debe renderizar <Keyboard /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe mostrar 14 botones', () => {
       expect(btn.length).toBe(16); 
    });
    test('Debe ejecutar las funciones al presionar los botones', () => {
        for (let i = 0; i <= 15; i++) {
            btn.at(i).simulate('click');
        }
        expect(handleOnClickNumber).toHaveBeenCalled();
        expect(handleOnClickOperation).toHaveBeenCalled();
        expect(handleOnReset).toHaveBeenCalled();
        expect(handleOnResolve).toHaveBeenCalled();
    });
});