import React from 'react';
import { mount } from 'enzyme';

import WorkItem from '../index';

describe('<WorkItem />', () => {
  it('should have a className', () => {
    const renderedComponent = mount(<WorkItem className="test" />);
    expect(renderedComponent.find('li').prop('className')).toBeDefined();
  });

  it('should render the content passed to it', () => {
    const content = <div>Hello world!</div>;
    const renderedComponent = mount(<WorkItem item={content} />);
    expect(renderedComponent.contains(content)).toBe(true);
  });
});
