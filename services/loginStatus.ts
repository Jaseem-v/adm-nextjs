// LoginStatusManager.js
let isLoggedIn = false;

export const setLoginStatus = (status: boolean) => {
  isLoggedIn = status;
};

export const getLoginStatus = () => {
  return isLoggedIn;
};
