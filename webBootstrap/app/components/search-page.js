import movieRow from './movies-row';
let movid = 0;
let COUNT = 20;
let lastId = 0;
let previous = [];
let searchText = '';
console.log(searchText);
let getSearchMovies = (cb)=> {
    // search movies with matched name
    $.ajax({
        method:'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        crossDomain: true,
        url:'http://104.194.82.160:5000/searchMovies',
        data: JSON.stringify({
            movname: searchText,
            movid: movid,
            count: COUNT
        }),
        success: (data)=>{
            console.log(data);
            let searchMovies = data.instances;
            searchMovies.map((movie)=> {
                movie.movid = movie.movid;
                movie.movScreenshotUrl = movie.movScreenshotUrl.split('|');
                movie.genre = movie.genre.split('|');
                movie.actor = movie.actor.split('|');
                movie.movScreenshotUrl.pop();
                movie.genre.pop();
                movie.actor.pop();
            });
            lastId = searchMovies[searchMovies.length - 1].movid;
            console.log(lastId);
            cb(searchMovies);
        },
        error: (err)=> {
            console.log(router.app.$route);
            console.log('Error: ', err);
        }
    })
}


export default {
    template: '<div>\
    <div class="search-page">\
        <search-movies-row></search-movies-row>\
    <nav aria-label="..." class="col-md-10">\
        <ul class="pager">\
            <li><a v-on:click="previousPage()">Previous</a></li>\
            <li><a v-on:click="nextPage()">Next</a></li>\
        </ul>\
    </nav></div>',
    components: {
        'search-movies-row': new movieRow(getSearchMovies, {
            title: 'Search Movies'
        })
    },
    watch: {
        '$route': function () {
            movid = 0;
            previous = [];
            searchText = window.location.href.split('/')[window.location.href.split('/').length - 1];
            let vueComponent = this.$children[0];
            vueComponent.movies = [];
            getSearchMovies((movie)=>{
                vueComponent.movies = movie;
            });
        }
    },
    created: ()=>{
        movid = 0;
        previous = [];
        searchText = window.location.href.split('/')[window.location.href.split('/').length - 1];
    },
    methods: {
        nextPage() {
            let vueComponent = this.$children[0];
            if (vueComponent.movies.length < 20) return;
            previous.push(movid);
            movid = lastId;
            vueComponent.movies = [];
            getSearchMovies((movie)=> {
                vueComponent.movies = movie;
            });
            document.getElementById('app').scrollIntoView();
        },
        previousPage() {
            if (movid == 0) return;
            if (previous == []) movid = 0;
            else movid = previous.pop();
            let vueComponent = this.$children[0];
            vueComponent.movies = [];
            getSearchMovies((movie)=> {
                vueComponent.movies = movie;
            });
            document.getElementById('app').scrollIntoView();
        }
    }
};