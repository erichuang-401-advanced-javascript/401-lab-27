import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// eslint-disable-next-line import/no-unresolved
import Counter from '../counter/counter';

Enzyme.configure({ adapter: new Adapter() });

describe('Counter renders', () => {
  const wrapper = shallow(<Counter/>);

  test('Counter renders', () => {
    expect(wrapper.find('#currentScore').exists()).toEqual(true);
    expect(wrapper.find('#counterWrap').exists()).toEqual(true);
    expect(wrapper.find('#likeButton').exists()).toEqual(true);
    expect(wrapper.find('#dislikeButton').exists()).toEqual(true);
    expect(wrapper.find('#buttonWrap').exists()).toEqual(true);
  });

  test('Counter states', () => {
    // default state
    expect(wrapper.state('score', 'thumbsUp', 'thumbsDown')).toEqual(0);
    expect(wrapper.state('colorChange')).toEqual('black');

    // click like
    wrapper.find('#likeButton').simulate('click');

    // +1 state
    expect(wrapper.state('score', 'thumbsUp')).toEqual(1);
    expect(wrapper.state('thumbsDown')).toEqual(0);
    expect(wrapper.state('colorChange')).toEqual('blue');

    // click reset
    wrapper.find('#currentScore').simulate('click');

    // default state
    expect(wrapper.state('score', 'thumbsUp', 'thumbsDown')).toEqual(0);
    expect(wrapper.state('colorChange')).toEqual('black');

    // click dislike
    wrapper.find('#dislikeButton').simulate('click');

    // -1 state
    expect(wrapper.state('score', 'thumbsDown')).toEqual(-1);
    expect(wrapper.state('thumbsUp')).toEqual(0);
    expect(wrapper.state('colorChange')).toEqual('red');
  });
});
