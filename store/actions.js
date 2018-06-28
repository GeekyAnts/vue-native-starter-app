import { fetchPosts } from './fetch';
import { AsyncStorage } from 'react-native';

const LOAD_MORE_STEP = 10;

// ensure data for rendering given list type
export function FETCH_LIST_DATA ({ commit, dispatch }, { type }) {
  commit('FETCHING_LISTS');
  return fetchPosts(type)
    .then(posts => {
      return commit('SET_POSTS', { posts })
    });
}

export function FETCH_ITEMS ({ commit, state }, { ids }) {
  const type = state.activeType;
  return ids.length
    ? fetchItems(ids).then(items => commit('SET_ITEMS', { items, type }))
    : Promise.resolve();
}

export function LOGIN ({ commit, state}, {userObj, navigate}) {
  commit('LOGGING_IN', true)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      commit('LOGIN_SUCCESFULL', {userObj})
      AsyncStorage.setItem('email', userObj.email)
      navigate('Home');
      resolve();
    }, 1000)
  })
}

export function SET_USER({commit, state}, {userObj}) {
  return commit('LOGIN_SUCCESFULL', {userObj})
}

export function LOGOUT ({ commit, state}, callback) {
  return new Promise((resolve, reject) => {
      AsyncStorage.removeItem('email').then(() => {
        callback();
        resolve();
      })
  })
}