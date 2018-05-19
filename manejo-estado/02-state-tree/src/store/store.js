import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		nombres: 'Orlando Daniel',
		apellidos: 'Monteverde Esparragoza',
		profesion: 'Developer',
		ciudad: 'Cumana',
	}
})