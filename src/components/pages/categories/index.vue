<template>
  <div class="d-flex flex-column flex-root">
    <div class="d-flex flex-row flex-column-fluid page">
      <div id="kt_aside" class="aside aside-left aside-fixed d-flex flex-column flex-row-auto">
        <appHeader></appHeader>

        <appAside></appAside>

      </div>
      <appFooter>
          <div>
            <h2>index</h2>
            <b-table striped hover :items="items"></b-table>
          </div>
      </appFooter>
    </div>
  </div>
</template>
<script>
import Header from "../../layouts/Header";
import Aside from "../../layouts/Aside";
import Footer from "../../layouts/Footer"

export default {
  name: 'app',
  data() {
    return {
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  },
  components: {
    appHeader: Header,
    appAside:Aside,
    appFooter: Footer
  }
}
</script>
