import navBarComponent from './nav-bar.js';
import footerComponent from './footer.js';
import router from './../router/index';
export default {
template: '\
    <div class="movie-detail">\
        <!-- bread scrumb-->\
        <ol class="breadcrumb">\
            <li><a href="#">Home</a></li>\
            <li v-for="ge in movie.genre"><router-link :to="{path: \'/genre/\'+ge}">{{ge}}</router-link></li>\
            <li>{{movie.movname}}</li>\
        </ol>\
        <!-- movies-->\
        <div class="container">\
            <div class="row">\
                <div class="col-md-12"><h1>{{movie.movname}}</h1></div>\
                <!-- movie trailers and screen shots -->\
                <div class="col-md-8 col-sm-12 col-lg-8">\
                    <iframe width="100%" height="500" v-bind:src="\'https://www.youtube.com/embed/\' + movie.movTrailerUrl.split(\'?v=\')[1] + \'?ecver=1\'" frameborder="0" allowfullscreen></iframe>\
                    <br>\
                </div>\
                <div class="col-md-4 col-sm-12 col-lg-4" style="padding-top: 40px;">\
                    <!-- movie information-->\
                    <div class="panel">\
                        <h3>Movie Detail</h3>\
                        <p><b>Description:</b> {{movie.description}}</p>\
                        <p><b>Year:</b>  {{movie.movyear}}</p>\
                        <p><b>Genre:</b>\
                            <p v-for="ge in movie.genre" style="display:inline-block">\
                                |<a href="">&nbsp;{{ ge }}&nbsp;</a>\
                            </p>\
                            <b>Star:&nbsp;</b><p v-for="act in movie.actor" style="display:inline-block">{{ act }},</p>\
                        </div>\
                        <div>\
                            <h4>Movie Views</h4>\
                            <!--movie review charts-->\
                            <div  v-for="i in 3">\
                            <el-rate disabled></el-rate>\
                            </div>\
                            <canvas id="movieReview"></canvas>\
                        </div>\
                    </div>\
                </div>\
                <div class="col-md-12" style="padding-top: 40px;">\
                    <h4>Rate this Movie: \
                    <el-rate></el-rate>\
                    </h4>\
                </div>\
                <div class="col-md-12">\
                    <h4>ScreentShots</h4>\
                    <div class="row">\
                        <a v-for="imgUrl in movie.movScreenshotUrl" :href="imgUrl" data-toggle="lightbox" data-gallery="example-gallery" class="thumbnail col-sm-6 col-md-4 col-lg-4">\
                            <img :src="imgUrl" class="img-fluid screen-shot">\
                        </a>\
                    </div>\
                </div>\
            <div class="row">\
                \
            </div>\
            <div class="row">\
                <div class="col-md-12" style="padding-top: 40px;">\
                    <h4>Reviews</h4>\
                    <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="5"></div>\
                </div>\
            </div>\
        </div>\
    </div>',
    data: function() {
        console.log(this.$route.query)
        return {
            movie: this.$route.query
        };
    },
    created: ()=> {
    },
    components: {
        'nav-bar': navBarComponent,
        'footer-component': footerComponent
    }
};