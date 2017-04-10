require('./../style/scss/style.scss');
import Vue from './vue';
import moviesRow from './moviesRow';

new moviesRow({
    el: '#recommend-movies-row', // under index.html element id == #recommend-movies-row
    data: {
        title: 'Recommend Movies',
        movies: [
            {text:'test'},
            {text:'test'},
            {text:'test'},
            {text:'test'},
            {text:'test'}
        ]
    }
});

new moviesRow({
    el: '#new-movies-row', // under index.html element id == #recommend-movies-row
    data: {
        title: 'Newest Movies',
        movies: [
            {text:'test'},
            {text:'test'},
            {text:'test'},
            {text:'test'},
            {text:'test'}
        ]
    }
});