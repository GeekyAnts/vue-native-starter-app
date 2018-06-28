const baseURL = 'https://jsonplaceholder.typicode.com';

export function _fetch (path) {
  return fetch({
    method: 'GET',
    url: `${baseURL}/${path}`
  })
  .then((response) => response.json());
}

export function fetchPosts (type) {
  return _fetch(`${type}`);
}
