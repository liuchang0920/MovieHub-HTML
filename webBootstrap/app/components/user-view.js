
import userInfo from './user-info'
import ratedFilms from './rated-films'

let $ = require('../lib/jquery');

export default {
    template:'<div class="user-view">\
				<user-info></user-info>\
				<rated-films></rated-films>\
			  </div>',
    components: {
    	'user-info': userInfo,
    	'rated-films': ratedFilms
    }
}