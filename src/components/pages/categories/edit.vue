<template>
  <div class="d-flex flex-column flex-root">
    <div class="d-flex flex-row flex-column-fluid page">
      <div id="kt_aside" class="aside aside-left aside-fixed d-flex flex-column flex-row-auto">
        <appHeader></appHeader>

        <appAside></appAside>

      </div>
      <appFooter>
        <div>
          <h2>Edit Category : {{ $route.params.id }}</h2>
          <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter email"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  placeholder="Enter name"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="form.food"
                  :options="foods"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                  v-model="form.checked"
                  id="checkboxes-4"
                  :aria-describedby="ariaDescribedby"
                >
                  <b-form-checkbox value="me">Check me out</b-form-checkbox>
                  <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </div>
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
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  components: {
    appHeader: Header,
    appAside:Aside,
    appFooter: Footer
  }
}
</script>
