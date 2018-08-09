/**
 * reference
 * https://github.com/weexteam/weex-hackernews/tree/master/src/store
 */

import Vue from "vue-native-core";
import Vuex from "vuex";
import * as actions from "./actions";
import * as mutations from "./mutations";
import VuexPersistence from "vuex-persist";
import { AsyncStorage } from "react-native";

console.log(mutations);

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  strictMode: true,
  storage: AsyncStorage,
  asyncStorage: true,
  reducer: state => ({ userObj: state.userObj })
});

const vuexPersistEmitter = () => {
  return store => {
    store.subscribe(mutation => {
      console.log(mutation.type);
      if (mutation.type === "RESTORE_MUTATION") {
        console.log("345345345");
        store._vm.$root.$emit("storageReady");
      }
    });
  };
};

Object.assign(mutations, {
  RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION
});

const store = new Vuex.Store({
  actions,
  mutations,
  plugins: [vuexLocal.plugin, vuexPersistEmitter()],
  state: {
    activeType: "posts",
    posts: [],
    logging_in: false,
    userObj: {},
    loadingPosts: false,
    logged_In: false
  }
});

export default store;
export { vuexLocal };
