import React from 'react';

import { shallow } from 'enzyme';
import StatusSection from './status-section';

describe('<StatusSection />', () => {
    it('Renders without crashing', () => {
        const guesses = Math.round(Math.random() * 100);
        shallow(<StatusSection guesses={guesses} />);
    });
});