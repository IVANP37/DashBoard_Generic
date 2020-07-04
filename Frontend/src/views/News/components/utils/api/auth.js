import client from 'utils/api/client';
const { localStorage } = global.window;

const auth = {
  login({ username, password }) {
    if (auth.loggedIn()) {
      return Promise.resolve(true);
    }
    return client
      .post(
        `http://texdat.ddns.net:3001/login?username=${username}&password=${password}`,
        {},
      )
      .then(response => {
        localStorage.user = JSON.stringify(response.data);
        return response.data;
      })
      .catch(() => {
        localStorage.removeItem('user');
      });
  },

  logout() {
    localStorage.removeItem('user');
    return Promise.resolve(true);
  },

  loggedIn() {
    return !!localStorage.user;
  },
  userData() {
    return localStorage.user ? JSON.parse(localStorage.user) : null;
  },
};

export default auth;
