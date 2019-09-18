import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// eslint-disable-next-line import/no-unresolved
import Footer from '../footer/footer';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer renders', () => {
  test('Footer renders', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer').exists()).toEqual(true);
    expect(wrapper.find('footer').text()).toEqual('© 2018 Code Fellows');
  });
});
