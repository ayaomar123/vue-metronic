<template>
  <!--begin::Aside Menu-->
  <div id="kt_aside_menu_wrapper" class="aside-menu-wrapper flex-column-fluid">
    <!--begin::Menu Container-->
    <div id="kt_aside_menu" class="aside-menu my-4" data-menu-dropdown-timeout="500" data-menu-scroll="1"
         data-menu-vertical="1">
      <!--begin::Menu Nav-->
      <ul class="menu-nav">
        <li class="menu-item menu-item-active" aria-haspopup="true" data-menu-toggle="hover">
          <a href="#" class="menu-link menu-toggle py-5">
            <i class="fas fa-lg fa-home"></i>
            <span class="menu-text">Home</span>
          </a>
        </li>
        <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
          <a  href="" class="menu-link menu-toggle py-5">
            <i class="fab fa-telegram-plane"></i>
            <span class="menu-text">Category</span>
            <i class="fas fa-chevron-right" style="position: absolute;right: 7px"></i>
          </a>
          <div class="menu-submenu" kt-hidden-height="200" style="display: none; overflow: hidden;">
            <i class="menu-arrow"></i>
            <ul class="menu-subnav">
              <li class="menu-item menu-item-parent" aria-haspopup="true">
          												<span class="menu-link">
          													<span class="menu-text">Category</span>
          												</span>
              </li>
              <router-link to="/category/index" tag="li" class="menu-item" aria-haspopup="true"><a class="menu-link">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">index</span>
              </a></router-link>

              <router-link to="/category/create" tag="li" class="menu-item" aria-haspopup="true"><a class="menu-link">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">create</span>
              </a></router-link>

              <router-link to="/category/:id/edit" tag="li" class="menu-item" aria-haspopup="true"><a class="menu-link">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">edit</span>
              </a></router-link>
            </ul>
          </div>
        </li>

      </ul>
      <!--end::Menu Nav-->
    </div>
    <!--end::Menu Container-->
  </div>
  <!--end::Aside Menu-->
</template>

<script>
export default {

}
</script>

<style>

</style>
