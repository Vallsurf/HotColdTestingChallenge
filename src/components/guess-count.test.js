import React from 'react';
import { shallow } from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Displays GuessCount ', () => {
        const guessCount = 5; 
        let wrapper = shallow(<GuessCount  guessCount = {guessCount}/>);
        expect(wrapper.text()).toEqual(`You've made ${guessCount} guesses!`); 
    });

   
});