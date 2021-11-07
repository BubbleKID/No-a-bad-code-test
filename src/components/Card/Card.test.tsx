import React from 'react';
import { mount } from 'enzyme';
import TestRenderer  from 'react-test-renderer';
import Card from './Card';

test('Card should be rendered', () => {
    const component = TestRenderer.create(<Card height={200} width={200} title="title1" link="#"/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Card should be rendered if it has documentSize prop', () => {
    const component = TestRenderer.create(<Card height={200} width={200} documentSize={"100k"} title="title1" link="#"/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Card should be call windows.open if user clicks down arraw icon', () => {
    window.open = jest.fn();
    const wrapper = mount(<Card height={200} width={200} documentSize={"100k"} title="title1" link="down"/>)
    wrapper.find('.card__arrow').first().simulate('click');
    expect(window.open).toHaveBeenCalledWith('down', '_blank');
});

test('Card should be call windows.open if user clicks right arraw icon', () => {
    window.open = jest.fn();
    const wrapper = mount(<Card height={200} width={200} title="title1" link="right"/>)
    wrapper.find('.card__arrow').first().simulate('click');
    expect(window.open).toHaveBeenCalledWith('right', '_blank');
});
