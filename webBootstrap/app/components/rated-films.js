//should define a function to login
import Vue from '../lib/vue';
let $ = require('../lib/jquery');
import DATA from'../data/data';

let setCookie = function (cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

let getCookie = function (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


let getRatedMovies = (cb) => {
    console.log("get userinfo" + JSON.stringify(DATA));
    let cusidValue = DATA.user.userInstance.cusid;
    //let cusidValue = 6001;
    console.log("cusid: "+ cusidValue);
    $.ajax({
        method: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        crossDomain: true,
        url:'http://104.194.82.160:5000/db/getUserRatings',
        data: JSON.stringify({'cusid': cusidValue}),
        success: (data)=>{
            cb(data);
        },
        error: (err)=> {
            console.log('Error: ', err);
        }
    });
}

export default {
	template:'<div class="col-md-10">\
               <div class="row">\
                <div v-for="item in filmRatings" class="col-sm-5 col-md-3" >\
                    <div class="thumbnail">\
                      <img :src="item.movScreenshotUrl[0]" alt="..." style="height: 250px;">\
                      <div class="caption">\
                        <h5 class="row-movie-title"v-text="item.movname"></h5>\
                        <p v-text="item.movyear"></p>\
                        <p>Genre: <br>Comedy, Sport</p>\
                        <p>Rate: \
                        <select class="example" v-model="item.rating" disabled="disabled">\
                          <option value="1" >1</option>\
                          <option value="2" >2</option>\
                          <option value="3" >3</option>\
                          <option value="4" >4</option>\
                          <option value="5" >5</option>\
                          <option value="6" >6</option>\
                          <option value="7" >7</option>\
                          <option value="8" >8</option>\
                          <option value="9" >9</option>\
                          <option value="10" >10</option>\
                        </select>\
                        </p>\
                      </div>\
                    </div>\
                </div>\
               </div>\
             </div>',
    data: function(){
        return {
            filmRatings:[],
            cusid: DATA.user.userInstance.cusid
        };
    },
    methods:{
        
    },
    created: function () {
        var temp = this;
        $(document).ready(function(){
            //bar rating

            //fetch related films
        
            getRatedMovies((data) =>{
                //console.log(JSON.stringify(data));
                let status = data.status;
                if(status == 200){
                    let ratedMovies = data.instances;
                    ratedMovies.map((movie)=>{
                        movie.movScreenshotUrl = movie.movScreenshotUrl.split('|');
                        movie.genre = movie.genre.split('|');
                        movie.actor = movie.actor.split('|');
                        movie.movScreenshotUrl.pop();
                        movie.genre.pop();
                        movie.actor.pop();
                    });
                    temp.filmRatings = ratedMovies;  
                    //update style
                    
                }else{
                    console.log("error geting rated movies");
                }
            });
        });
    }
}