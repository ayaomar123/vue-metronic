<template>
  <body class="sidebar-noneoverflow">
  <appHeader></appHeader>
  <div class="main-container" id="container">
    <div class="overlay"></div>
    <div class="search-overlay"></div>
    <appAside>

    </appAside>

    <div id="content" class="main-content">

      <div class="layout-px-spacing">
        <div class="row layout-top-spacing">
          <div class="col-lg-12">
            <div class="statbox widget box box-shadow">
              <div class="widget-header">
                <div class="row">
                  <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4 class="text-center" style="background-color: #CCCCCC">الأصناف</h4>
                  </div>
                </div>
              </div>
              <div class="widget-content widget-content-area">
                <div class="table-responsive mb-4">
                  <div id="style-3_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="style-3_length"><label>Results :  <select name="style-3_length" aria-controls="style-3" class="form-control"><option value="5">5</option><option value="10">10</option><option value="20">20</option><option value="50">50</option></select></label></div></div><div class="col-sm-12 col-md-6"><div id="style-3_filter" class="dataTables_filter"><label><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg><input type="search" class="form-control" placeholder="Search..." aria-controls="style-3"></label></div></div></div><div class="row"><div class="col-sm-12"><table id="style-3" class="table style-3 table-hover dataTable no-footer" role="grid" aria-describedby="style-3_info">
                    <thead>
                    <tr role="row"><th class="checkbox-column text-center sorting_asc" tabindex="0" aria-controls="style-3" rowspan="1" colspan="1" aria-sort="ascending" aria-label=" Record Id : activate to sort column descending" style="width: 88px;"> Record Id </th><th class="text-center sorting" tabindex="0" aria-controls="style-3" rowspan="1" colspan="1" aria-label="Image: activate to sort column ascending" style="width: 52px;">Image</th><th class="sorting" tabindex="0" aria-controls="style-3" rowspan="1" colspan="1" aria-label="First Name: activate to sort column ascending" style="width: 96px;">First Name</th><th class="sorting" tabindex="0" aria-controls="style-3" rowspan="1" colspan="1" aria-label="Last Name: activate to sort column ascending" style="width: 91px;">Last Name</th><th class="sorting" tabindex="0" aria-controls="style-3" rowspan="1" colspan="1" aria-label="Email: activate to sort column ascending" style="width: 129px;">Email</th><th class="sorting" tabindex="0" aria-controls="style-3" rowspan="1" colspan="1" aria-label="Mobile No.: activate to sort column ascending" style="width: 95px;">Mobile No.</th><th class="text-center sorting" tabindex="0" aria-controls="style-3" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 73px;">Status</th><th class="text-center sorting" tabindex="0" aria-controls="style-3" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending" style="width: 62px;">Action</th></tr>
                    </thead>
                    <tbody>

                    <tr role="row">
                      <td class="checkbox-column text-center sorting_1"> 1 </td>
                      <td class="text-center">
                        <span><img src="/public/assets/img/90x90.jpg" class="profile-img" alt="avatar"></span>
                      </td>
                      <td>Donna</td>
                      <td>Rogers</td>
                      <td>donna@yahoo.com</td>
                      <td>555-555-5555</td>
                      <td class="text-center"><span class="shadow-none badge badge-primary">Approved</span></td>
                      <td class="text-center">
                        <ul class="table-controls">
                          <li><a href="javascript:void(0);" class="bs-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 p-1 br-6 mb-1"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg></a></li>
                          <li><a href="javascript:void(0);" class="bs-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash p-1 br-6 mb-1"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></a></li>
                        </ul>
                      </td>
                    </tr><tr role="row">
                      <td class="checkbox-column text-center sorting_1"> 2 </td>
                      <td class="text-center">
                        <span><img src="/public/assets/img/90x90.jpg" class="profile-img" alt="avatar"></span>
                      </td>
                      <td>Andy</td>
                      <td>King</td>
                      <td>andyking@gmail.com</td>
                      <td>555-555-6666</td>
                      <td class="text-center"><span class="shadow-none badge badge-warning">Suspended</span></td>
                      <td class="text-center">
                        <ul class="table-controls">
                          <li><a href="javascript:void(0);" class="bs-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 p-1 br-6 mb-1"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg></a></li>
                          <li><a href="javascript:void(0);" class="bs-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash p-1 br-6 mb-1"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></a></li>
                        </ul>
                      </td>
                    </tr><tr role="row">
                      <td class="checkbox-column text-center sorting_1"> 3 </td>
                      <td class="text-center">
                        <span><img src="/public/assets/img/90x90.jpg" class="profile-img" alt="avatar"></span>
                      </td>
                      <td>Alma</td>
                      <td>Clarke</td>
                      <td>Alma@live.com</td>
                      <td>777-555-5555</td>
                      <td class="text-center"><span class="shadow-none badge badge-danger">Closed</span></td>
                      <td class="text-center">
                        <ul class="table-controls">
                          <li><a href="javascript:void(0);" class="bs-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 p-1 br-6 mb-1"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg></a></li>
                          <li><a href="javascript:void(0);" class="bs-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash p-1 br-6 mb-1"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></a></li>
                        </ul>
                      </td>
                    </tr><tr role="row">
                      <td class="checkbox-column text-center sorting_1"> 4 </td>
                      <td class="text-center">
                        <span><img src="/public/assets/img/90x90.jpg" class="profile-img" alt="avatar"></span>
                      </td>
                      <td>Vincent</td>
                      <td>Carpenter</td>
                      <td>vinnyc@outlook.com</td>
                      <td>555-666-5555</td>
                      <td class="text-center"><span class="shadow-none badge badge-primary">Approved</span></td>
                      <td class="text-center">
                        <ul class="table-controls">
                          <li><a href="javascript:void(0);" class="bs-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 p-1 br-6 mb-1"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg></a></li>
                          <li><a href="javascript:void(0);" class="bs-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash p-1 br-6 mb-1"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></a></li>
                        </ul>
                      </td>
                    </tr><tr role="row">
                      <td class="checkbox-column text-center sorting_1"> 5 </td>
                      <td class="text-center">
                        <span><img src="/public/assets/img/90x90.jpg" class="profile-img" alt="avatar"></span>
                      </td>
                      <td>Kristen</td>
                      <td>Beck</td>
                      <td>kristen@adobe.com</td>
                      <td>444-444-4444</td>
                      <td class="text-center"><span class="shadow-none badge badge-warning">Suspended</span></td>
                      <td class="text-center">
                        <ul class="table-controls">
                          <li><a href="javascript:void(0);" class="bs-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 p-1 br-6 mb-1"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg></a></li>
                          <li><a href="javascript:void(0);" class="bs-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash p-1 br-6 mb-1"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></a></li>
                        </ul>
                      </td>
                    </tr><tr role="row">
                      <td class="checkbox-column text-center sorting_1"> 6 </td>
                      <td class="text-center">
                        <span><img src="/public/assets/img/90x90.jpg" class="profile-img" alt="avatar"></span>
                      </td>
                      <td>Oscar</td>
                      <td>Garner</td>
                      <td>oscar@gmail.com</td>
                      <td>111-111-1111</td>
                      <td class="text-center"><span class="shadow-none badge badge-danger">Closed</span></td>
                      <td class="text-center">
                        <ul class="table-controls">
                          <li><a href="javascript:void(0);" class="bs-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 p-1 br-6 mb-1"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg></a></li>
                          <li><a href="javascript:void(0);" class="bs-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash p-1 br-6 mb-1"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></a></li>
                        </ul>
                      </td>
                    </tr><tr role="row">
                      <td class="checkbox-column text-center sorting_1"> 7 </td>
                      <td class="text-center">
                        <span><img src="/public/assets/img/90x90.jpg" class="profile-img" alt="avatar"></span>
                      </td>
                      <td>Nia</td>
                      <td>Hillyer</td>
                      <td>niaHill@yahoo.com</td>
                      <td>111-666-1111</td>
                      <td class="text-center"><span class="shadow-none badge badge-primary">Approved</span></td>
                      <td class="text-center">
                        <ul class="table-controls">
                          <li><a href="javascript:void(0);" class="bs-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 p-1 br-6 mb-1"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg></a></li>
                          <li><a href="javascript:void(0);" class="bs-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash p-1 br-6 mb-1"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></a></li>
                        </ul>
                      </td>
                    </tr></tbody>
                  </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="style-3_info" role="status" aria-live="polite">Showing page 1 of 1</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="style-3_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="style-3_previous"><a href="#" aria-controls="style-3" data-dt-idx="0" tabindex="0" class="page-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></a></li><li class="paginate_button page-item active"><a href="#" aria-controls="style-3" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="style-3_next"><a href="#" aria-controls="style-3" data-dt-idx="2" tabindex="0" class="page-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></li></ul></div></div></div></div>
                </div>
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
