import React from 'react';
import { shallow } from 'enzyme';

import AboutItem from 'components/AboutItem';
import List from '../index';

describe('<List />', () => {
  it('should render the component if no items are passed', () => {
    const renderedComponent = shallow(<List component={AboutItem} />);
    expect(renderedComponent.find(AboutItem)).toBeDefined();
  });

  it('should pass all items props to rendered component', () => {
    const items = [{ id: 1, name: 'Hello' }, { id: 2, name: 'World' }];

    const component = ({ item }) => <AboutItem>{item.name}</AboutItem>; // eslint-disable-line react/prop-types

    const renderedComponent = shallow(
      <List items={items} component={component} />
    );
    expect(renderedComponent.find(component)).toHaveLength(2);
    expect(renderedComponent.find(component).at(0).prop('item')).toBe(items[0]);
    expect(renderedComponent.find(component).at(1).prop('item')).toBe(items[1]);
  });
});
