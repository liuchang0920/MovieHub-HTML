import navBarComponent from './nav-bar.js';
import footerComponent from './footer.js';

export default {
    template: '<div class="movie-detail">\
        <nav-bar></nav-bar>\
        <div class="movie-detail">\
        <!-- bread scrumb-->\
        <ol class="breadcrumb">\
          <li><a href="#">Home</a></li>\
                <li><a href=""v-on:click="toGenre()">Genre</a></li>\
                <li><a href="">Action</a></li>\
                <li>Movie Name</li>\
              </ol>\
              <!-- action movies-->\
              <div class="col-md-6 col-md-push-1">\
                  <div>\
                      <div class="col-md-10"><h1>Movie Name</h1></div>\
                      <div class="col-md-1" style="padding-bottom: 0px; margin-bottom: 0px; padding-top: 40px;"><a href="" >Genre</a>\
                      </div>\
                      <div class="row">\
                          <!-- movie trailers and screen shots -->\
                          <iframe width="100%" height="315" src="https://www.youtube.com/embed/g50VrZbkxEk" frameborder="0" allowfullscreen></iframe>\
                          <br>\
                          <div class="offset-md-2 col-md-8">\
                              <h4>ScreentShots</h4>\
                              <div class="row">\
                                  <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="example-gallery" class="thumbnail col-sm-4">\
                                      <img src="https://unsplash.it/600.jpg?image=251" class="img-fluid">\
                                  </a>\
                                  <a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox" data-gallery="example-gallery" class="thumbnail col-sm-4">\
                                      <img src="https://unsplash.it/600.jpg?image=252" class="img-fluid">\
                                  </a>\
                                  <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="example-gallery" class="thumbnail col-sm-4">\
                                      <img src="https://unsplash.it/600.jpg?image=253" class="img-fluid">\
                                  </a>\
                                  <a href="https://unsplash.it/1200/768.jpg?image=254" data-toggle="lightbox" data-gallery="example-gallery" class="thumbnail col-sm-4">\
                                      <img src="https://unsplash.it/600.jpg?image=254" class="img-fluid">\
                                  </a>\
                                  <a href="https://unsplash.it/1200/768.jpg?image=255" data-toggle="lightbox" data-gallery="example-gallery" class="thumbnail col-sm-4">\
                                      <img src="https://unsplash.it/600.jpg?image=255" class="img-fluid">\
                                  </a>\
                                  <a href="https://unsplash.it/1200/768.jpg?image=256" data-toggle="lightbox" data-gallery="example-gallery" class="thumbnail col-sm-4">\
                                      <img src="https://unsplash.it/600.jpg?image=256" class="img-fluid">\
                                  </a>\
                              </div>\
                          </div>\
                      </div>\
                      <div class="row">\
                          <h4>Rate this Movie: <span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span></h4>\
                      </div>\
                      <div class="row">\
                          <h4>Reviews</h4>\
                          <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="5"></div>\
                      </div>\
                  </div>\
              </div>\
              <div class="col-md-4 col-md-push-1" style="padding-top: 40px;">\
              <!-- movie information-->\
                  <div class="panel">\
                      <h3>Movie Detail</h3>\
                      <p><b>Year:</b>  2017</p>\
                      <p><b>Genre:</b>  <a href="">Sport</a>, <a href="">Comedy</a>, <a href="">Horror</a></p>\
                      <p><b>Star:</b>  Tom, Jerry, Amy</p>\
                      <p><b>Star:</b>  Tom, Jerry, Amy</p>\
                      <p><b>Star:</b>  Tom, Jerry, Amy</p>\
                      <p><b>Star:</b>  Tom, Jerry, Amy</p>\
                      <p><b>Star:</b>  Tom, Jerry, Amy</p>\
                  </div>\
                  <br><br><br><br>\
                  <div>\
                      <h4>Movie Views</h4>\
                      <!--movie review charts-->\
                      <canvas id="movieReview"></canvas>\
                  </div>\
            </div>\
        </div>\
        <footer-component><footer-component>\
    </div>',
    components: {
        'nav-bar': navBarComponent,
        'footer-component': footerComponent
    }
};