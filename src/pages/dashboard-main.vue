<template>

  <div id="dashboard">
    <div class="wrapper ">
    <div class="sidebar">
    
      <div class="logo">
    

      <div class="user-image">
                <div class="author">
                  <a href="#">
                    <img class="avatar border-gray" src="../img/about-img.jpg" alt="...">
                    <h5 class="title">Mike Andrew</h5>
                  <p class="subname">
                    Monitoring and Evaluation Lead
                  </p>
                  </a>
                 
                </div>               
            </div>
      </div>
        <!-- header component -->
        <sidebar-component></sidebar-component>
    
    
    </div>
    <div class="main-panel">
      <!-- header component -->
        <header-component></header-component>
       <div class="panel-header panel-header-sm"></div>
       <router-view></router-view>
        <footer-component></footer-component>
    </div>

    
  </div>
  </div>
</template>

<style lang="scss">
  @import '../static/css/dashboard.css';
@import   'bootstrap/scss/bootstrap.scss';
</style>
<script>
import HedaerCompoent from '../components/dashboard-header.vue'
import Sidebar from '../components/dashboard-sidebar.vue'
import Footer from '../components/dashboard-footer.vue'
import Vue from 'vue';
export default {
 
}
Vue.component('HeaderComponent',HedaerCompoent)
Vue.component('SidebarComponent',Sidebar)
Vue.component('FooterComponent',Footer)
</script>
 
 
 
 
 