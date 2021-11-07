import React from 'react';
import { mount } from 'enzyme';
import TestRenderer  from 'react-test-renderer';
import Card from './Card';
import { ReactComponent as ArrowDownBtn } from '../../images/svg/arrow-down.svg';
import { ReactComponent as ArrowRightBtn } from '../../images/svg/arrow-right.svg';

test('Card should be rendered', () => {
    const component = TestRenderer.create(<Card height={200} width={200}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Card should be rendered if it has documentSize prop', () => {
    const component = TestRenderer.create(<Card height={200} width={200} documentSize={"100k"}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
