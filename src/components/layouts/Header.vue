<template>
  <div class="header-container fixed-top">
    <header class="header navbar navbar-expand-sm">

      <ul class="navbar-nav theme-brand flex-row  text-center">

        <router-link aria-haspopup="true" class="nav-item theme-logo" tag="li" to="/index">
          <a>
            <img alt="logo" class="navbar-logo" src="/public/assets/img/90x90.jpg">
          </a>
        </router-link>
        <router-link aria-haspopup="true" class="nav-item theme-text" tag="li" to="/index">
          <a class="nav-link">
            CORK
          </a>
        </router-link>

        <li class="nav-item toggle-sidebar">
          <a class="sidebarCollapse" data-placement="bottom" href="javascript:void(0);">
            <svg class="feather feather-list" fill="none" height="24" stroke="currentColor" stroke-linecap="round"
                 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                 xmlns="http://www.w3.org/2000/svg">
              <line x1="8" x2="21" y1="6" y2="6"></line>
              <line x1="8" x2="21" y1="12" y2="12"></line>
              <line x1="8" x2="21" y1="18" y2="18"></line>
              <line x1="3" x2="3" y1="6" y2="6"></line>
              <line x1="3" x2="3" y1="12" y2="12"></line>
              <line x1="3" x2="3" y1="18" y2="18"></line>
            </svg>
          </a>
        </li>
      </ul>

      <ul class="navbar-item flex-row navbar-dropdown">
        <li class="nav-item dropdown apps-dropdown more-dropdown md-hidden">
          <div class="dropdown custom-dropdown-icon">
            <a id="appSection" aria-expanded="false" aria-haspopup="true" class="dropdown-toggle btn"
               data-toggle="dropdown"
               href="#" role="button">
              <svg class="feather feather-crosshair" fill="none" height="24" stroke="currentColor"
                   stroke-linecap="round"
                   stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                   xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="22" x2="18" y1="12" y2="12"></line>
                <line x1="6" x2="2" y1="12" y2="12"></line>
                <line x1="12" x2="12" y1="6" y2="2"></line>
                <line x1="12" x2="12" y1="22" y2="18"></line>
              </svg>
              <span>Apps</span>
              <svg class="feather feather-chevron-down" fill="none" height="24" stroke="currentColor"
                   stroke-linecap="round"
                   stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                   xmlns="http://www.w3.org/2000/svg">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>

            <div aria-labelledby="appSection" class="dropdown-menu dropdown-menu-right animated fadeInUp">
              <a class="dropdown-item" data-value="Chat" href="apps_chat.html">
                <svg class="feather feather-message-square" fill="none" height="24" stroke="currentColor"
                     stroke-linecap="round"
                     stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Chat</a>
              <a class="dropdown-item" data-value="Mailbox" href="apps_mailbox.html">
                <svg class="feather feather-mail" fill="none" height="24" stroke="currentColor" stroke-linecap="round"
                     stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Mailbox</a>
              <a class="dropdown-item" data-value="Todo" href="apps_todoList.html">
                <svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round"
                     stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Todo List</a>
              <a class="dropdown-item" data-value="Notes" href="apps_notes.html">
                <svg class="feather feather-file-text" fill="none" height="24" stroke="currentColor"
                     stroke-linecap="round"
                     stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" x2="8" y1="13" y2="13"></line>
                  <line x1="16" x2="8" y1="17" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Notes</a>
              <a class="dropdown-item" data-value="Scrumboard" href="apps_scrumboard.html">
                <svg class="feather feather-file-plus" fill="none" height="24" stroke="currentColor"
                     stroke-linecap="round"
                     stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="12" x2="12" y1="18" y2="12"></line>
                  <line x1="9" x2="15" y1="15" y2="15"></line>
                </svg>
                Scrumboard</a>
              <a class="dropdown-item" data-value="Contacts" href="apps_contacts.html">
                <svg class="feather feather-map-pin" fill="none" height="24" stroke="currentColor"
                     stroke-linecap="round"
                     stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Contacts</a>
              <a class="dropdown-item" data-value="Invoice" href="apps_invoice.html">
                <svg class="feather feather-dollar-sign" fill="none" height="24" stroke="currentColor"
                     stroke-linecap="round"
                     stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                  <line x1="12" x2="12" y1="1" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                Invoice List</a>
              <a class="dropdown-item" data-value="Calendar" href="apps_calendar.html">
                <svg class="feather feather-calendar" fill="none" height="24" stroke="currentColor"
                     stroke-linecap="round"
                     stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                  <rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
                Calendar</a>
            </div>
          </div>
        </li>
      </ul>

      <ul class="navbar-item flex-row search-ul">
        <li class="nav-item align-self-center search-animated">
          <svg class="feather feather-search toggle-search" fill="none" height="24" stroke="currentColor"
               stroke-linecap="round"
               stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
               xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
          </svg>
          <form class="form-inline search-full form-inline search" role="search">
            <div class="search-bar">
              <input class="form-control search-form-control  ml-lg-auto" placeholder="Search..." type="text">
            </div>
          </form>
        </li>
      </ul>
      <ul class="navbar-item flex-row navbar-dropdown">
        <li class="nav-item dropdown language-dropdown more-dropdown">
          <div class="dropdown  custom-dropdown-icon">
            <a id="langDropdown" aria-expanded="false" aria-haspopup="true" class="dropdown-toggle btn"
               data-toggle="dropdown"
               href="#" role="button"><img alt="flag" class="flag-width"
                                           src="/public/assets/img/ca.png"><span>English</span>
              <svg class="feather feather-chevron-down" fill="none" height="24" stroke="currentColor"
                   stroke-linecap="round"
                   stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                   xmlns="http://www.w3.org/2000/svg">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>

            <div aria-labelledby="langDropdown" class="dropdown-menu dropdown-menu-right animated fadeInUp">
              <a class="dropdown-item" data-img-value="de" data-value="German" href="javascript:void(0);"><img
                alt="flag" class="flag-width" src="/public/assets/img/de.png"> German</a>
              <a class="dropdown-item" data-img-value="jp" data-value="Japanese" href="javascript:void(0);"><img
                alt="flag" class="flag-width" src="/public/assets/img/jp.png"> Japanese</a>
              <a class="dropdown-item" data-img-value="fr" data-value="French" href="javascript:void(0);"><img
                alt="flag" class="flag-width" src="/public/assets/img/fr.png"> French</a>
              <a class="dropdown-item" data-img-value="ca" data-value="English" href="javascript:void(0);"><img
                alt="flag" class="flag-width" src="/public/assets/img/ca.png"> English</a>
            </div>
          </div>
        </li>

        <li class="nav-item dropdown message-dropdown">
          <a id="messageDropdown" aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle"
             data-toggle="dropdown" href="javascript:void(0);">
            <svg class="feather feather-message-circle" fill="none" height="24" stroke="currentColor"
                 stroke-linecap="round"
                 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span class="badge badge-primary"></span>
          </a>
          <div aria-labelledby="messageDropdown" class="dropdown-menu p-0 position-absolute animated fadeInUp">
            <div class="">
              <a class="dropdown-item">
                <div class="">

                  <div class="media">
                    <div class="user-img">
                      <div class="avatar avatar-xl">
                        <span class="avatar-title rounded-circle">KY</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="">
                        <h5 class="usr-name">Kara Young</h5>
                        <p class="msg-title">ACCOUNT UPDATE</p>
                      </div>
                    </div>
                  </div>

                </div>
              </a>
              <a class="dropdown-item">
                <div class="">
                  <div class="media">
                    <div class="user-img">
                      <div class="avatar avatar-xl">
                        <span class="avatar-title rounded-circle">DA</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="">
                        <h5 class="usr-name">Daisy Anderson</h5>
                        <p class="msg-title">ACCOUNT UPDATE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a class="dropdown-item">
                <div class="">

                  <div class="media">
                    <div class="user-img">
                      <div class="avatar avatar-xl">
                        <span class="avatar-title rounded-circle">OG</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="">
                        <h5 class="usr-name">Oscar Garner</h5>
                        <p class="msg-title">ACCOUNT UPDATE</p>
                      </div>
                    </div>
                  </div>

                </div>
              </a>
            </div>
          </div>
        </li>

        <li class="nav-item dropdown notification-dropdown">
          <a id="notificationDropdown" aria-expanded="false" aria-haspopup="true"
             class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);">
            <svg class="feather feather-bell" fill="none" height="24" stroke="currentColor" stroke-linecap="round"
                 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span class="badge badge-success"></span>
          </a>
          <div aria-labelledby="notificationDropdown" class="dropdown-menu position-absolute animated fadeInUp">
            <div class="notification-scroll">

              <div class="dropdown-item">
                <div class="media server-log">
                  <svg class="feather feather-server" fill="none" height="24" stroke="currentColor"
                       stroke-linecap="round"
                       stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                       xmlns="http://www.w3.org/2000/svg">
                    <rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
                    <rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
                    <line x1="6" x2="6" y1="6" y2="6"></line>
                    <line x1="6" x2="6" y1="18" y2="18"></line>
                  </svg>
                  <div class="media-body">
                    <div class="data-info">
                      <h6 class="">Server Rebooted</h6>
                      <p class="">45 min ago</p>
                    </div>

                    <div class="icon-status">
                      <svg class="feather feather-x" fill="none" height="24" stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                           xmlns="http://www.w3.org/2000/svg">
                        <line x1="18" x2="6" y1="6" y2="18"></line>
                        <line x1="6" x2="18" y1="6" y2="18"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div class="dropdown-item">
                <div class="media ">
                  <svg class="feather feather-heart" fill="none" height="24" stroke="currentColor"
                       stroke-linecap="round"
                       stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <div class="media-body">
                    <div class="data-info">
                      <h6 class="">Licence Expiring Soon</h6>
                      <p class="">8 hrs ago</p>
                    </div>

                    <div class="icon-status">
                      <svg class="feather feather-x" fill="none" height="24" stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                           xmlns="http://www.w3.org/2000/svg">
                        <line x1="18" x2="6" y1="6" y2="18"></line>
                        <line x1="6" x2="18" y1="6" y2="18"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div class="dropdown-item">
                <div class="media file-upload">
                  <svg class="feather feather-file-text" fill="none" height="24" stroke="currentColor"
                       stroke-linecap="round"
                       stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" x2="8" y1="13" y2="13"></line>
                    <line x1="16" x2="8" y1="17" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  <div class="media-body">
                    <div class="data-info">
                      <h6 class="">Kelly Portfolio.pdf</h6>
                      <p class="">670 kb</p>
                    </div>

                    <div class="icon-status">
                      <svg class="feather feather-check" fill="none" height="24" stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                           xmlns="http://www.w3.org/2000/svg">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li class="nav-item dropdown user-profile-dropdown  order-lg-0 order-1">
          <a id="userProfileDropdown" aria-expanded="false" aria-haspopup="true"
             class="nav-link dropdown-toggle user" data-toggle="dropdown" href="javascript:void(0);">
            <svg class="feather feather-settings" fill="none" height="24" stroke="currentColor" stroke-linecap="round"
                 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                 xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3"></circle>
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </a>
          <div aria-labelledby="userProfileDropdown" class="dropdown-menu position-absolute animated fadeInUp">
            <div class="user-profile-section">
              <div class="media mx-auto">
                <img alt="avatar" class="img-fluid mr-2" src="/public/assets/img/90x90.jpg">
                <div class="media-body">
                  <h5>Sonia Shaw</h5>
                  <p>Project Leader</p>
                </div>
              </div>
            </div>
            <div class="dropdown-item">
              <a href="user_profile.html">
                <svg class="feather feather-user" fill="none" height="24" stroke="currentColor" stroke-linecap="round"
                     stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>My Profile</span>
              </a>
            </div>
            <div class="dropdown-item">
              <a href="apps_mailbox.html">
                <svg class="feather feather-inbox" fill="none" height="24" stroke="currentColor" stroke-linecap="round"
                     stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                  <path
                    d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                </svg>
                <span>My Inbox</span>
              </a>
            </div>
            <div class="dropdown-item">
              <a href="auth_lockscreen.html">
                <svg class="feather feather-lock" fill="none" height="24" stroke="currentColor" stroke-linecap="round"
                     stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                  <rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>Lock Screen</span>
              </a>
            </div>
            <div class="dropdown-item">
              <a href="auth_login.html">
                <svg class="feather feather-log-out" fill="none" height="24" stroke="currentColor"
                     stroke-linecap="round"
                     stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" x2="9" y1="12" y2="12"></line>
                </svg>
                <span>Log Out</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
</script>
