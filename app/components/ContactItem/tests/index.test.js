import React from 'react';
import { mount } from 'enzyme';

import ContactItem from '../index';

describe('<ContactItem />', () => {
  it('should have a className', () => {
    const renderedComponent = mount(<ContactItem className="test" />);
    expect(renderedComponent.find('li').prop('className')).toBeDefined();
  });

  it('should render the content passed to it', () => {
    const content = <div>Hello world!</div>;
    const renderedComponent = mount(<ContactItem item={content} />);
    expect(renderedComponent.contains(content)).toBe(true);
  });
});
