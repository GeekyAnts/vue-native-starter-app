<template>
    <nb-container :style="{flex:1, backgroundColor: '#fff'}">
        <nb-header>
          <nb-left>
            <nb-button
              transparent
              :on-press="() => navigation.navigate('DrawerOpen')"
            >
            <nb-icon name="menu" />
                </nb-button>
            </nb-left>
            <nb-body>
                <nb-title>Posts</nb-title>
            </nb-body>
            <nb-right />
        </nb-header>
        <nb-content>
            <nb-list>
                <item
                    v-if="!loading"
                    v-for="(itemType, types) in items"
                    :data="itemType" />
                <nb-spinner v-if="loading"></nb-spinner>
            </nb-list>
        </nb-content>
    </nb-container>
</template>

<script>
import React from 'react';
import Item from '../components/item';
import { Dimensions } from 'react-native';
import store from '../store';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default {
  computed: {
    items () {
      return store.state.posts;
    },
    loading () {
        return store.state.loadingPosts;
    }
  },
  props: {
      navigation: Object
  },
  created () {
    this.fetchList(store.state.activeType);
  },
  methods: {
    fetchList (type) {
      return store.dispatch('FETCH_LIST_DATA', {
        type: type
      });
    }
  },
  components: {
      Item
  }
};
</script>