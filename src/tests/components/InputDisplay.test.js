import { shallow } from "enzyme";
import { InputDisplay } from "../../components/InputDisplay";

describe('Pruebas en el componente <InputDisplay />', () => {
    const value = ['1','2','3'];
    const wrapper = shallow(<InputDisplay value={value} />);

    test('Debe renderizar <InputDisplay /> correctamente', () => {
       expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe mostrar el valor de array correctamente', ()=>{
        const valueString = value.join('');
        const input = wrapper.find('input');

        expect(input.prop('value')).toBe(valueString);
    });
});
