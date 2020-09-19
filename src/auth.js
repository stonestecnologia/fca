export const isAuthenticated = () => {
  if (localStorage.getItem("user")) {
    return true;
  } else {
    return false;
  }
};
