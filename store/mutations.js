export function SET_POSTS (state, { posts}) {
  state.loadingPosts = false;
  state.posts = posts;
}

export function FETCHING_LISTS (state) {
  state.loadingPosts = true;
}

export function LOGGING_IN (state, status) {
  state.logging_in = status;
}

export function LOGIN_SUCCESFULL (state, {userObj}) {
  state.userObj = userObj;
  state.logging_in = false;
}

export function SET_ITEMS (state, { items, type }) {
  state.items[type] = state.items[type]
    .concat(items)
    .reduce((acc, val) => {
      for (let i = 0, j = acc.length; i < j; i++) {
        if (acc[i].id === val.id) {
          return acc.splice(i, 1, val);
        }
      }
      acc.push(val);
      return acc;
    }, []);
}
