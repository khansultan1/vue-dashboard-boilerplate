<template>

    
      <!-- End Navbar -->
    
      <div class="content">
          <div class="indicator">
          <div class="row">
   <div class="col-xl-3 col-md-6">
      <div class="card-one card card-stats">
         <!----><!----><!---->
         <div class="card-body">
            <div class="statistics statistics-horizontal">
               <div class="info info-horizontal">
                  <div class="row">
                     <div class="col-5">
                        <div class="icon icon-circle icon-danger"><i class="now-ui-icons media-2_sound-wave"></i></div>
                     </div>
                     <div class="col-7 text-right">
                        <h3 class="info-title">90%</h3>
                        <h6 class="stats-title">CPU TRAFFIC</h6>
                     </div>
                     <div class="col-12">
                       <div class="details-statitics">
                         <canvas id="population-stats"></canvas>
                   
                        </div>
                         <p class="small"><small>(Small tagline)</small></p> 
                     </div>
                  </div>
               </div>
            </div>
         </div>
     
      
      </div>
   </div>
   <div class="col-xl-3 col-md-6">
      <div class="card-two card card-stats">
         <!----><!----><!---->
         <div class="card-body">
            <div class="statistics statistics-horizontal">
               <div class="info info-horizontal">
                  <div class="row">
                     <div class="col-5">
                        <div class="icon icon-circle icon-warning"><i class="now-ui-icons shopping_cart-simple"></i></div>
                     </div>
                     <div class="col-7 text-right">
                        <h3 class="info-title">760</h3>
                        <h6 class="stats-title" title="Sales">Sales</h6>
                     </div>
                     <div class="col-12">
                         <div class="details-statitics">
                             <canvas id="noofbirth-stats"></canvas>
                                    </div>
                        <p class="small"><small>  (Small tagline) </small></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
   
      </div>
   </div>
   <div class="col-xl-3 col-md-6">
      <div class=" card-three card card-stats">
         <!----><!----><!---->
         <div class="card-body">
            <div class="statistics statistics-horizontal">
               <div class="info info-horizontal">
                  <div class="row">
                     <div class="col-5">
                        <div class="icon icon-circle icon-danger"><i class="now-ui-icons sport_user-run"></i></div>
                     </div>
                     <div class="col-7 text-right">
                        <h3 class="info-title">1022</h3>
                        <h6 class="stats-title" title="Latest Lead">Latest Lead</h6>
                     </div>
                     <div class="col-12">
                       <div class="details-statitics">
                          <canvas id="neonate-admited"></canvas>
                         </div>
                        <p class="small"><small>  (Tagline..)  </small></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        
        
      </div>
   </div>
   <div class="col-xl-3 col-md-6">
      <div class="card-four card card-stats">
         <!----><!----><!---->
         <div class="card-body">
            <div class="statistics statistics-horizontal">
               <div class="info info-horizontal">
                  <div class="row">
                     <div class="col-5">
                        <div class="icon icon-circle icon-info"><i class="now-ui-icons ui-2_favourite-28"></i></div>
                     </div>
                     <div class="col-7 text-right">
                        <h3 class="info-title">48</h3>
                        <h6 class="stats-title" title="New Likes">New Likes </h6>
                     </div>
                     <div class="col-12">
                        <div class="details-statitics">
                          <canvas id="public-newborn"></canvas>
                     
                        </div>
                         <p> <small title="">(Tagine...)</small>
                          <small title=""> </small></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        
        
      </div>
   </div>
</div>
      </div>

    
 <div class="content chart-content">
        <div class="row">
          <div class="col-lg-4">
            <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">Global Sales</h5>
                <h4 class="card-title">Shipped Products</h4>
                <div class="dropdown">
                  <button type="button" class="btn btn-round btn-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
                    <i class="now-ui-icons loader_gear"></i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <a class="dropdown-item text-danger" href="#">Remove Data</a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="chart-area">
                  <canvas id="lineChartExample"></canvas>
                </div>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="now-ui-icons arrows-1_refresh-69"></i> Just Updated
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">2018 Sales</h5>
                <h4 class="card-title">All products</h4>
                <div class="dropdown">
                  <button type="button" class="btn btn-round btn-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
                    <i class="now-ui-icons loader_gear"></i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <a class="dropdown-item text-danger" href="#">Remove Data</a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="chart-area">
                  <canvas id="lineChartExampleWithNumbersAndGrid"></canvas>
                </div>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="now-ui-icons arrows-1_refresh-69"></i> Just Updated
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">Email Statistics</h5>
                <h4 class="card-title">24 Hours Performance</h4>
              </div>
              <div class="card-body">
                <div class="chart-area">
                  <canvas id="barChartSimpleGradientsNumbers"></canvas>
                </div>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="now-ui-icons ui-2_time-alarm"></i> Last 7 days
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card  card-tasks">
              <div class="card-header ">
                <h5 class="card-category">Backend development</h5>
                <h4 class="card-title">Tasks</h4>
              </div>
              <div class="card-body ">
                <div class="table-full-width table-responsive">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="form-check-input" type="checkbox" checked>
                              <span class="form-check-sign"></span>
                            </label>
                          </div>
                        </td>

                        <td class="text-left">Sign contract for "What are conference organizers afraid of?"</td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="" class="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                            <i class="now-ui-icons ui-2_settings-90"></i>
                          </button>
                          <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                            <i class="now-ui-icons ui-1_simple-remove"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="form-check-input" type="checkbox">
                              <span class="form-check-sign"></span>
                            </label>
                          </div>
                        </td>

                        <td class="text-left">Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="" class="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                            <i class="now-ui-icons ui-2_settings-90"></i>
                          </button>
                          <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                            <i class="now-ui-icons ui-1_simple-remove"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="form-check-input" type="checkbox" checked>
                              <span class="form-check-sign"></span>
                            </label>
                          </div>
                        </td>
                        
                        <td class="text-left">Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                        </td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="" class="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                            <i class="now-ui-icons ui-2_settings-90"></i>
                          </button>
                          <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                            <i class="now-ui-icons ui-1_simple-remove"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="card-footer ">
                <hr>
                <div class="stats">
                  <i class="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5 class="card-category">All Persons List</h5>
                <h4 class="card-title"> Employees Stats</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead class=" text-primary">
                      <th>
                        Name
                      </th>
                      <th>
                        Country
                      </th>
                      <th>
                        City
                      </th>
                      <th class="text-right">
                        Salary
                      </th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Dakota Rice
                        </td>
                        <td>
                          Niger
                        </td>
                        <td>
                          Oud-Turnhout
                        </td>
                        <td class="text-right">
                          $36,738
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Minerva Hooper
                        </td>
                        <td>
                          Curaçao
                        </td>
                        <td>
                          Sinaai-Waas
                        </td>
                        <td class="text-right">
                          $23,789
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Sage Rodriguez
                        </td>
                        <td>
                          Netherlands
                        </td>
                        <td>
                          Baileux
                        </td>
                        <td class="text-right">
                          $56,142
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Doris Greene
                        </td>
                        <td>
                          Malawi
                        </td>
                        <td>
                          Feldkirchen in Kärnten
                        </td>
                        <td class="text-right">
                          $63,542
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Mason Porter
                        </td>
                        <td>
                          Chile
                        </td>
                        <td>
                          Gloucester
                        </td>
                        <td class="text-right">
                          $78,615
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
     
  
   
</template>

<style lang="scss">

//  @import 'semantic-ui-css/semantic.min.css';
</style>
<script>
import RestServices from '../services/services.js';
// import DashboardData from '../data/dashboard.js';
//import ui_dashboard from '../static/js/now-ui-dashboard.min.js';
export default {
  data(){
    return {
      rest: new RestServices()
    }
  },
  mounted(){
   // let confObhj=DashboardData;

    // for(var i=0;i<confObhj.length;i++){
    //         dureJS.initDashboardPageCharts(confObhj[i]);
          
    // }
    
    //this.getDashboard();
  },
  methods:{
    getDashboard(){
      this.rest.getRequest('https://jsonplaceholder.typicode.com/todos/1').then(result=>{
        console.log(result);
      })
    }
  }
}
</script>
