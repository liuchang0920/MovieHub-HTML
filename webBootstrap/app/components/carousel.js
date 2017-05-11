let $ = require('../lib/jquery');
let getCarouselMovies = (cb)=>{
    $.ajax({
        method:'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        crossDomain: true,
        url:'http://104.194.82.160:5000/db/getNewestMovies',
        data: JSON.stringify({count: 4}),
        success: (data)=>{
            cb(data);
        },
        error: (err)=> {
            console.log('Error: ', err);
        }
    });
}

export default {
    template: '<div id="myCarousel" class="container carousel slide" data-ride="carousel">\
        <!-- Indicators -->\
        <ol class="carousel-indicators">\
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>\
            <li data-target="#myCarousel" data-slide-to="1"></li>\
            <li data-target="#myCarousel" data-slide-to="2"></li>\
            <li data-target="#myCarousel" data-slide-to="3"></li>\
        </ol>\
        <!-- Wrapper for slides -->\
        <div class="carousel-inner" role="listbox">\
            <div  v-for="(element, index) in carouselMovieArray"  :class="{item: true , active: index == 0}" >\
                <img :src="element.movScreenshotUrl[0]"  style="height:500px; max-width:100%" class="img-rounded">\
            </div>\
        </div>\
        <!-- Left and right controls -->\
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">\
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\
            <span class="sr-only">Previous</span>\
        </a>\
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">\
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\
            <span class="sr-only">Next</span>\
        </a>\
    </div>',
    data: function(){
        return {
            carouselMovieArray:[]
        }
    },
    created: function () {
        this.carouselMovies();
    },
    methods: {
        carouselMovies() {
            var temp = this;
            getCarouselMovies((data)=>{
                status = data.status;
                if(status == 200){
                    let carousel = data.instances;
                    carousel.map((movie)=> {
                            movie.movScreenshotUrl = movie.movScreenshotUrl.split('|');
                            movie.genre = movie.genre.split('|');
                            movie.actor = movie.actor.split('|');
                            movie.movScreenshotUrl.pop();
                            movie.genre.pop();
                            movie.actor.pop();
                    });
                    temp.carouselMovieArray = carousel;
                    console.log("length:"+temp.carouselMovieArray.length);
                    console.log(temp.carouselMovieArray[0].movScreenshotUrl[0]);
                }else{
                    console.log("error geting carousel movies");
                }
            });
        }
    } 
};