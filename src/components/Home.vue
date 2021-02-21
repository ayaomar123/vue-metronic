<template>
  <body class="sidebar-noneoverflow">
  <appHeader></appHeader>
  <div class="main-container" id="container">
    <div class="overlay"></div>
    <div class="search-overlay"></div>
    <appAside></appAside>

    <div id="content" class="main-content">
      <div class="layout-px-spacing">
      </div>

      <appFooter></appFooter>
    </div>

  </div>
  </body>
</template>

<script>
import Header from "./layouts/Header";
import Aside from "./layouts/Aside";
import Footer from "./layouts/Footer"

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    appHeader: Header,
    appAside: Aside,
    appFooter: Footer
  }
}
</script>

<style>
/*@import "./public/plugins/custom/fullcalendar/fullcalendar.bundle.css";*/
</style>
