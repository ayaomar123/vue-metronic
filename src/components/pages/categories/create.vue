<template>
  <body class="sidebar-noneoverflow">
  <appHeader></appHeader>
  <div id="container" class="main-container">
    <div class="overlay"></div>
    <div class="search-overlay"></div>
    <appAside>

    </appAside>

    <div id="content" class="main-content">

      <div class="layout-px-spacing">
        <div class="row layout-top-spacing">
          <div class="col-lg-12 col-12 layout-spacing">
            <div class="statbox widget box box-shadow">
              <div class="widget-header">
                <div class="row">
                  <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4 class="text-center" style="background-color: #CCCCCC">إضافة</h4>
                  </div>
                </div>
              </div>
              <div class="widget-content widget-content-area">
                <form>
                  <div class="form-group mb-4">
                    <label for="exampleFormControlInput2">Email address</label>
                    <input id="exampleFormControlInput2" class="form-control" placeholder="name@example.com"
                           type="email">
                  </div>
                  <div class="form-group mb-4">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <select id="exampleFormControlSelect1" class="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group mb-4">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea id="exampleFormControlTextarea1" class="form-control" rows="3"></textarea>
                  </div>
                  <div class="form-group mb-4 mt-3">
                    <label for="exampleFormControlFile1">Example file input</label>
                    <input id="exampleFormControlFile1" class="form-control-file" type="file">
                  </div>
                  <input class="mt-4 mb-4 btn btn-primary" name="time" type="submit">
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <appFooter></appFooter>

  </div>
  </body>
</template>
<script>
import Header from "../../layouts/Header";
import Aside from "../../layouts/Aside";
import Footer from "../../layouts/Footer"

export default {
  name: 'app',
  components: {
    appHeader: Header,
    appAside: Aside,
    appFooter: Footer
  }
}
</script>
