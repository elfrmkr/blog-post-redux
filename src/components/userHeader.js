import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  // we are fetching repetative data from database. For every user, data requested as much as their blogpost number. -> 2 possible ways to solve this in actions folder index.js
  /*
  1) memoize

  function getUser(id) {
    fetch(id);
    return "make a request"
  }
  getUser(2);

  const memoizegetUser = _.memoize(getUser) // new function that has the same behavior with the old function

  memoizegetUser(3); // the original function only runs one time. If you try to do that again, second request will not be run. Return value will be the same with the previous one. 

  2) new action creator fetchPostsAndUsers()
  - first call fetch posts,
  - get list of posts,
  - find unique ids from the list of posts,
  - iterate over unique user ids,
  - call 'fetchUser' with each userId
  */


  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}
// instead of rendering every time as constant 
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps)(UserHeader);
