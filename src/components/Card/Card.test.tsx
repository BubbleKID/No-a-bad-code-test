import React from 'react';
import TestRenderer  from 'react-test-renderer';
import Card from './Card';

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