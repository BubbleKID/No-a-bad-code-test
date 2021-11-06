import React from 'react';
import TestRenderer  from 'react-test-renderer';
import Card from './Card';

test('Card should be rendered', () => {
    const component = TestRenderer.create(<Card height={200} width={200}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});