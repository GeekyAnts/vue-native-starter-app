<template>
  <nb-container>
    <nb-content :style="stylesObj.drawerContent" :bounces="false">
      <nb-list>
        <nb-list-item>
          <nb-text>{{userData.email}}</nb-text>
        </nb-list-item>
        <nb-list-item>
          <nb-text :on-press="logout">Logout</nb-text>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions, Platform } from "react-native";
import drawerCover from "../../assets/drawer-cover.png";
import { NavigationActions } from 'vue-native-router';
import drawerImage from "../../assets/logo-kitchen-sink.png";
import thumbnail from "../../assets/user.png";
import store from '../store';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const resetAction = NavigationActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({routeName: "Login"})]
                    })
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  methods: {
      logout() {
          store.dispatch('LOGOUT', () => this.navigation.dispatch(resetAction))
        }
  },
  computed: {
    userData () {
      return store.state.userObj;
    }
  },
  data: {
    stylesObj: {
      profilePic: {
            height: 40,
            width: 40,
            borderRadius: Platform.OS === "android" ? 40 : 20
        },
        drawerContent: {
            paddingTop: Platform.OS === "android" ? 20 : 30
        }
    },
    thumbnail: thumbnail
  }
};
</script>