import Vue from 'vue';
import Router from 'vue-router';
import Films from './views/Films.vue';
import FilmInfo from './views/FilmInfo.vue';
import PlanetInfo from './views/PlanetInfo.vue';
import PersonInfo from './views/PersonInfo.vue';


Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Films,
		},
		{
			path: '/films',
			name: 'films',
			component: Films,
		},
		{
			path: '/film/:id',
			name: 'film',
			component: FilmInfo,
		},
		{
			path: '/planet/:id',
			name: 'planet',
			component: PlanetInfo,
		},
		{
			path: '/character/:id',
			name: 'character',
			component: PersonInfo,
		},
	],
});
