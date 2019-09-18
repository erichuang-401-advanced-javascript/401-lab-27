import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// eslint-disable-next-line import/no-unresolved
import Header from '../header/header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header renders', () => {
  test('Header renders', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('header').exists()).toEqual(true);
    expect(wrapper.find('header').text()).toEqual('Header');
  });
});
