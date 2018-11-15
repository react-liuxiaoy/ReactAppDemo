import React from 'react';
import TestRenderer from 'react-test-renderer';

function Link(props) {
    return <a className="a" href={props.page}>{props.children}</a>;
}

it('renders without crashing', () => {
    const testRenderer = TestRenderer.create(
        <Link page="https://www.facebook.com/">Facebook</Link>
    );
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(Link).props.children).toEqual('Facebook');
    expect(testInstance.findByProps({className: "a"}).children).toEqual(['Facebook']);
});
