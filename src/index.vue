<template>
    <root>
      <app-navigation></app-navigation>
    </root>
</template>


<script>
import React from "react";
import { StackNavigator, DrawerNavigator, navigationService } from "vue-native-router";
import { Root } from "native-base";
import LoginScreen from "./screen/login.vue";
// import SignupScreen from "./screen/Signup/index.vue";
import HomeScreen from "./screen/home.vue";
import Sidebar from "./screen/sidebar.vue";

const Drawer = DrawerNavigator(
  {
    Home: { screen: HomeScreen },

  },
  {
    initialRouteName: "Home",
    contentComponent: props => <Sidebar {...props} />
  }
);

const AppNavigation = StackNavigator(
  {
    Login: { screen: LoginScreen },
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);
export default {
  components: { Root, AppNavigation }
};
</script> 