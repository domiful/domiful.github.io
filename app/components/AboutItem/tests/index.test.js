import React from 'react';
import { mount } from 'enzyme';

import AboutItem from '../index';

describe('<AboutItem />', () => {
  it('should have a className', () => {
    const renderedComponent = mount(<AboutItem className="test" />);
    expect(renderedComponent.find('li').prop('className')).toBeDefined();
  });

  it('should render the content passed to it', () => {
    const content = <div>Hello world!</div>;
    const renderedComponent = mount(<AboutItem item={content} />);
    expect(renderedComponent.contains(content)).toBe(true);
  });
});
