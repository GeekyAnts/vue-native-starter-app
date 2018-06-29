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