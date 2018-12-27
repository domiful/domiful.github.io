import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import RepoAboutItem from './RepoAboutItem';

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser()
  })
)(RepoAboutItem);
