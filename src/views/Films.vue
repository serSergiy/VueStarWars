<template>
	<div>
		<h2>Films SW:</h2>
		<div class="films-grid" ref="grid">
		<film-item v-for="film in films" :key="film.title" :film="film"/>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import FilmItem from '@/components/FilmItem.vue';

	export default {
		computed: {
			...mapState(['films']),
		},

		components: {
			FilmItem,
		},

		async created() {
			if (this.films.length !== 0) return;
			this.$store.dispatch('getFilms');
			this.$store.dispatch('getPlanets');
			this.$store.dispatch('getCharacters');
			this.$store.dispatch('getStarships');
			this.$store.dispatch('getVehicles');
			this.$store.dispatch('getSpecies');
		},
	};
</script>

<style lang="scss" scoped>
	.films-grid {
		margin: auto;
		width: 240px;
		height: 560px;
	}
</style>
