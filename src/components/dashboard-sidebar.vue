<template>
     <div class="sidebar-wrapper">
        <ul class="nav">
          <li>
           <router-link to="/">
              <i class="now-ui-icons design_app"></i>
              <p>Dashboard</p>
             </router-link>
          </li>
             <li>
              <router-link to="/userprofile">
              <i class="now-ui-icons users_single-02"></i>
              <p>User Profile</p>
            </router-link>
          </li>

           <li>
             <router-link to="/plan">
              <i class="now-ui-icons ui-1_send"></i>
              <p>Plan</p>
          </router-link>
          </li>
      
        
          <li>
             <router-link to="/reports">
              <i class="now-ui-icons files_paper"></i>
              <p>Reports</p>
          </router-link>
          </li>
       
          <li>
            <router-link to="/about">
              <i class="now-ui-icons education_paper"></i>
              <p>About</p>
            </router-link>
          </li>
        </ul>
      </div>
</template>

<script>
export default {

}
</script>

<style>

.router-link-exact-active{
  background-color: rgba(10, 10, 10, 0.253);
}
</style>
