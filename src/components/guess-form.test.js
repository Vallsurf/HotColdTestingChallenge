import React from 'react';
import { shallow, mount } from 'enzyme';
import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders GuessForm without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire callback function when input is submitted ', () => {
        const callback = jest.fn();  
        let wrapper = mount(<GuessForm onMakeGuess={callback} />); 
        const value = 20
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    });

   
});