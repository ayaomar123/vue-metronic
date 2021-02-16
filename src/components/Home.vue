<template>
  <div class="d-flex flex-column flex-root">
    <div class="d-flex flex-row flex-column-fluid page">
      <div id="kt_aside" class="aside aside-left aside-fixed d-flex flex-column flex-row-auto">
        <appHeader></appHeader>
        <appAside></appAside>
      </div>
      <appFooter>

      </appFooter>
    </div>
  </div>
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
    appAside:Aside,
    appFooter: Footer
  }
}
</script>

<style>
/*@import "./public/plugins/custom/fullcalendar/fullcalendar.bundle.css";*/
</style>
