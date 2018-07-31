import React from 'react';
import { shallow } from 'enzyme';
import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('Displays feedback ', () => {
        const guessCount = 5; 
        const feedback = 'Foo'; 
        let wrapper = shallow(<Feedback  feedback = {feedback} guessCount = {guessCount}/>);
        expect(wrapper.contains(feedback)).toEqual(true); 
    });

   
});