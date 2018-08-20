import axios from 'axios';
let MAINURL='';
axios.defaults.headers.common['Authorization'] = axios.AUTH_TOKEN; // your auth tocken will be initialize here
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default class RestServices {
 
    getRequest(url) {
    this.showLoader();
     return axios.get(MAINURL+url)
     .then(response => {
        this.hideLoader();
      return response;
     })
     .catch(error => {
        this.hideLoader();
         return error;
     
       
     })
    }

    postRequest(url, data) {
        this.showLoader();
        return axios.post(MAINURL+url,data)
        .then(response=> {
           this.hideLoader();
         return response;
        })
        .catch(error=> {
            this.hideLoader();
            return error;
           
        })
    }
    showLoader(){
       
    }
    hideLoader(){
      
    }
  }