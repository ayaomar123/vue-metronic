<template>
  <body id="kt_body"
        class="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed page-loading">
  <router-view></router-view>
  </body>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  components: {
    appHome: Home,
  }
}
</script>



