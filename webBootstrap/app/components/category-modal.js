let $ = require('../lib/jquery');
let ddd = {
  genre: []
};

let getGenre = (cb)=>{
                $.ajax({
                  method:'GET',
                  contentType: 'application/json; charset=utf-8',
                  dataType: 'json',
                  crossDomain: true,
                  url:'http://104.194.82.160:5000/db/MovieGenres',
                  data: JSON.stringify(),
                  success:(d)=>{
                    ddd.genre = d.instance;

                  }
                })
  }


export default {
	template:'<div class="panel panel-default" >\
              <div class="panel-heading">\
                <h3 class="panel-title">Category</h3>\
              </div>\
              <div class="panel-body">\
                <ul class="list-group">\
                    <li class="list-group-item" v-for="i in genre.genre">\
                      <router-link :to="{path:\'/genre/\'+i.genre}">{{i.genre}}</router-link>\
                    </li>\
                    \
                </ul>\
              </div>\
            </div>',
            data: function() {
              getGenre()
              console.log(ddd)
              return {
                genre:ddd
              };
            }
}