const baseURL = 'https://jsonplaceholder.typicode.com';

export function _fetch (path) {
  return fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    console.log(response)
    return response.json()
  }).catch((error) => console.log(error))
}

export function fetchPosts (type) {
  return _fetch(`${type}`);
}