<template>
  <div id="kt_wrapper" class="d-flex flex-column flex-row-fluid wrapper">
    <div id="kt_header" class="header header-fixed">
      <!--begin::Container-->
      <div class="container-fluid d-flex align-items-stretch justify-content-between">
        <!--begin::Header Menu Wrapper-->
        <div id="kt_header_menu_wrapper" class="header-menu-wrapper header-menu-wrapper-left">
          <!--begin::Header Menu-->
          <div id="kt_header_menu" class="header-menu header-menu-mobile header-menu-layout-default">
            <!--begin::Header Nav-->
            <ul class="menu-nav">
              <li aria-haspopup="true" class="menu-item menu-item-active">
                <a class="menu-link" href="../../../index.html">
                  <span class="menu-text">Dashboard</span>

                </a>
              </li>
            </ul>

            <!--end::Header Nav-->
          </div>

          <!--end::Header Menu-->
        </div>
        <!--end::Header Menu Wrapper-->
        <!--begin::Topbar-->
        <div class="topbar">
          <!--begin::User-->
          <div class="topbar-item">
            <div id="kt_quick_user_toggle"
                 class="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2">
              <span class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Hi, </span>
              <span class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">Sean</span>
              <span class="symbol symbol-35 symbol-light-success">
											<span class="symbol-label font-size-h5 font-weight-bold">S</span>
										</span>
            </div>

          </div>
          <!--end::User-->
        </div>
      </div>
      <!--end::Container-->
    </div>
    <div id="kt_content" class="content d-flex flex-column flex-column-fluid">
      <!--begin::Subheader-->
      <div id="kt_subheader" class="subheader py-2 py-lg-4 subheader-solid">
        <div class="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
          <!--begin::Info-->
          <div class="d-flex align-items-center flex-wrap mr-2">
            <!--begin::Page Title-->
            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Dashboard</h5>
            <!--end::Page Title-->
          </div>
        </div>
      </div>
      <!--end::Subheader-->
      <!--begin::Entry-->
      <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div class="container">
          <!--begin::Dashboard-->
          <slot></slot>

          <!--end::Dashboard-->
        </div>
        <!--end::Container-->
      </div>
      <!--end::Entry-->
    </div>

    <div id="kt_footer" class="footer bg-white py-4 d-flex flex-lg-column">
      <div class="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">

        <div class="nav nav-dark">
          <a class="nav-link pl-0 pr-5" href="http://keenthemes.com/metronic" target="_blank">About</a>
          <a class="nav-link pl-0 pr-5" href="http://keenthemes.com/metronic" target="_blank">Team</a>
          <a class="nav-link pl-0 pr-0" href="http://keenthemes.com/metronic" target="_blank">Contact</a>
        </div>
      </div>
    </div>
  </div>
</template>
