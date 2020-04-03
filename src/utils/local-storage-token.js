const localStorageKey = "__uid__";

function setToken(token) {
  window.localStorage.setItem(localStorageKey, token);
}

function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

function removeToken() {
  window.localStorage.removeItem(localStorageKey);
}

export { getToken, setToken, removeToken };
