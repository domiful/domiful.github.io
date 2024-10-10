/**
 * RepoAboutItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import AboutItem from 'components/AboutItem';
import { IssueIcon } from 'components/Icons';
import './style.scss';

export default class RepoAboutItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;
    let nameprefix = '';

    // If the repository is owned by a different person than we got the data for
    // it's a fork and we should show the name of the owner
    if (item.owner.login !== this.props.currentUser) {
      nameprefix = `${item.owner.login}/`;
    }

    // Put together the content of the repository
    const content = (
      <div className="repo-list-item">
        <a className="repo-list-item__repo-link" href={item.html_url} target="_blank">
          {nameprefix + item.name}
        </a>
        <a className="repo-list-item__issue-link" href={`${item.html_url}/issues`} target="_blank">
          <IssueIcon className="repo-list-item__issue-icon" />
          {item.open_issues_count}
        </a>
      </div>
    );

    // Render the content into a list item
    return (
      <AboutItem key={`repo-list-item-${item.full_name}`} item={content} />
    );
  }
}

RepoAboutItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};