<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import Meta from 'vue-meta';
import router from './router';
import store from './store';
import './registerGlobals';


Vue.use(Meta);

export default {
  router,
  store,
  metaInfo: {
    title: 'Default Title',
    titleTemplate: '%s - Company Name',
  },
};
</script>
