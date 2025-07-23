const UserStatus = ({ loggedIn, isAdmin }) => {
  if (loggedIn && isAdmin) {
    return <h3>Welcome Admin!</h3>;
  } else if (loggedIn && !isAdmin) {
    return <h3>Welcome User!</h3>;
  }
};

export default UserStatus;
