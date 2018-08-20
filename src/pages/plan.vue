<template>
    <div id="plan" class="content">
         <div class="card">
           <div class="card-body">
         <div class="row">
            <div class="col-12">
            <div class="search" v-bind:class="{collapsed:!searchActive}">
            <input type="text" class="form-control" placeholder="Search">
            <a v-on:click="toggleSearch()"></a>
            </div>
                </div>
            </div>


    <div class="row">
        <div class="col-12">
    
               
  <div class="card--content available">Plan 1</div>
  <div class="card--content booked">Plan 2</div>
   <div class="card--content available">Plan 3</div>
  <div class="card--content booked">RICH Plan 4</div>
    <div class="card--content info">Plan 6</div>
           </div>
     </div>
       

        <div class="row">
            <div class="col-9">
                 <div class="card card-calendar">
            <div class="card-body">
    <div id="fullCalendar"></div>
            </div>
        </div>
            </div>
            <div class="col-3 symbols-container">
                  <div class="sym"><div class="available symbol"><p>Available</p></div></div>
                  <div class="sym"><div class="booked symbol"><p>Planned</p></div></div>
                  <div class="sym"><div class="info symbol"><p>Trip Report Pending</p></div></div>
            </div>
            
        </div>
        </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
 @import url('../static/css/fullcalendar.css');
 @import url('../css/plan.scss');

</style>
<script>
import 'fullcalendar'
import $ from 'jquery';
  var today = new Date()
  var y = today.getFullYear()
  var m = today.getMonth()
  var d = today.getDate()
  export default {
    data() {
      return {
     searchActive:false
      }
    },
    methods: {
      initCalendar() {
        var $calendar = $('#fullCalendar')
        $calendar.fullCalendar({
          header: {
            left: 'title',
            center: 'month,agendaWeek',
           // right: 'prev,next,today'
          },
          defaultDate: today,
          selectable: true,
          selectHelper: true,
           droppable: true,
          views: {
            month: { // name of view
              titleFormat: 'MMMM YYYY'
              // other view-specific options here
            },
            week: {
              titleFormat: ' MMMM D YYYY'
            }
          },
          dayRender: function(date, cell) {
                var today = $.fullCalendar.moment().add(7, 'days');
                var end = $.fullCalendar.moment().add(14, 'days');
                if (date.get('date') >= today.get('date') && date.get('date') <=  end.get('date')) {
                    cell.addClass('enable');
                }else{
                     cell.addClass('disabled');
                }
            },
          // select: function (start, end) {
          //   //  console.log(start, end);
           
          // },
          editable: true,
          eventLimit: true, // allow "more" link when too many events

          // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
          events: [
          {
            start: new Date(y, m, d),
            title:'new event',
             end: new Date(y, m, d),
         
          }],
           drop: function(date) {
            alert("Dropped on " + date.format());
        }
         })
        
        // $(".card--content").draggable();
      },
      toggleSearch(){
          this.searchActive= !this.searchActive;
      }
      
    },
    mounted() {
      this.initCalendar()
    }
  }
</script>

