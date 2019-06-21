import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
	counter: 10,
	name: 'Eugene',
	mark: 9,
	marks: [10, 11, 9, 8, 12, 7, 8, 9, 12, 6, 7, 8],
	films: [],
	planets: [],
	characters: [],
	species: [],
	vehicles: [],
	starships: [],
};
const getters = {
	// Геттер как свойство
	getGoodMarks: state => state.marks.filter(m => m >= 9),
	// Геттер как функция
	getMarks: state => mark => state.marks.filter(m => m >= mark),
};
const mutations = {
	incCounter: state => state.counter++,
	decCounter: state => state.counter--,
	setCounter: (state, payload) => {
		state.counter = payload;
		// commit('incCounter');
	},
	setFilms: (state, payload) => (state.films = payload),
	setPlanets: (state, payload) => (state.planets = payload),
	setCharacters: (state, payload) => (state.characters = payload),
	setStarships: (state, payload) => (state.starships = payload),
	setSpecies: (state, payload) => (state.species = payload),
	setVehicles: (state, payload) => (state.vehicles = payload),
};

const actions = {
	async getFilms({ state, commit }) {
		const {
			data: { results },
		} = await axios.post('https://swapi.co/api/films');
		commit('setFilms', results);
	},
	
	async getPlanets({ state, commit }) {
		const {
			data: { results },
		} = await axios.post('https://swapi.co/api/planets');
		commit('setPlanets', results);
		},

	async getCharacters({ state, commit }) {
			const {
				data: { results },
			} = await axios.post('https://swapi.co/api/people');
			commit('setCharacters', results);
			},

	async getStarships({ state, commit }) {
			const {
				data: { results },
			} = await axios.post('https://swapi.co/api/starships');
			commit('setStarships', results);
			},

	async getVehicles({ state, commit }) {
			const {
				data: { results },
			} = await axios.post('https://swapi.co/api/vehicles');
			commit('setVehicles', results);
			},	

	async getSpecies({ state, commit }) {
			const {
				data: { results },
			} = await axios.post('https://swapi.co/api/species');
			commit('setSpecies', results);
			},							
};

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
});
