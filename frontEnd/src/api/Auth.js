export const LoggedInStatus = () => {
  const userName = localStorage.getItem('loggedInUser');

  return userName ? true : false;
}