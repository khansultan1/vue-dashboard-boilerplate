
import AboutPage from './pages/about.vue';
import Dashboard from './pages/dashboard.vue';
import NotFoundPage from './pages/not-found.vue';
import DashboardMain from './pages/dashboard-main.vue';
import UserProfile from './pages/user-profile.vue';
import Reports from './pages/reports.vue';
import Plan from './pages/plan.vue';
export default [
  
   {
    path: '/',
    name:'dashboard-main',
    component:DashboardMain,
    children:[ 
      {
        path: '/about/',
        component: AboutPage,
        name:'about'
      },
      {
        path:'/reports',
        name:'reports',
        component:Reports
      },
      {
        path:'/plan',
        name:'plan',
        component:Plan
      },
      {
        path:'/userprofile',
        name:'userprofile',
        component:UserProfile
      },
      {
        path: '/',
        name:'dashboard',
        component:Dashboard,
      }
    ]
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
