<template>
    <nav class="navbar navbar-expand-lg navbar-transparent  navbar-absolute bg-primary fixed-top">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <div class="navbar-toggle">
              <button type="button" class="navbar-toggler">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <a class="navbar-brand" href="/#/">Dashboard</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-bar navbar-kebab"></span>
            <span class="navbar-toggler-bar navbar-kebab"></span>
            <span class="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navigation">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#/">
                  <i class="now-ui-icons media-2_sound-wave"></i>
                  <p>
                    <span class="d-lg-none d-md-block">Stats</span>
                  </p>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" v-bind:class="{ 'active': langexpand}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-on:click="areaExpand('langexpand')">
                  <i class="now-ui-icons location_world"></i>
                  <p>
                    <span class="d-lg-none d-md-block">Some Actions</span>
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" v-bind:class="{ 'visible-drop': langexpand}" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">English</a>
                  <!-- <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a> -->
                </div>
              </li>
             <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" v-bind:class="{ 'active': accountexpand}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-on:click="areaExpand('accountexpand')">
                  <i class="now-ui-icons users_single-02"></i>
    
                  <p>
                    <span class="d-lg-none d-md-block">Account</span>
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" v-bind:class="{ 'visible-drop': accountexpand}" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item"  href="#/userprofile">My Profile</a>
                  <a class="dropdown-item" href="#/changepassword">Change Password</a>
                     <a class="dropdown-item" href="#/logout">Logout</a>
                </div>
            
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
</template>

<script>
export default {
 data(){
    return {
      langexpand:false,
      accountexpand:false
    }
  },
methods:{
  areaExpand(name){
    this[name] = !this[name];

  }
},
mounted(){

}
}
</script>

<style>
.visible-drop{
   visibility: visible !important;
   opacity: 1 !important;
   transition: 1s all;
   margin-top:20px !important;
 }
.dropdown-toggle.active{
      background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0.1875rem;
    color: #FFFFFF;
}
</style>
