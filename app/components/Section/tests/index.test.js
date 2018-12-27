import React from 'react';
import { mount } from 'enzyme';

import Section from '../index';

describe('<Section />', () => {
  it('should have a className', () => {
    const renderedComponent = mount(<Section className="test" />);
    expect(renderedComponent.find('li').prop('className')).toBeDefined();
  });

  it('should render the content passed to it', () => {
    const content = <div>Hello world!</div>;
    const renderedComponent = mount(<Section item={content} />);
    expect(renderedComponent.contains(content)).toBe(true);
  });
});
