<template>
	<div :style="{display: this.film == '' ? 'none' : 'block'}">
		<h1> Detailed info for film "{{this.film != '' ? this.film.title : "" }}" </h1>
		
		<div class="block">
		<h2> Planets: </h2>
			<div class="list-item" v-for="planet in this.actualPlanets" :key="planet.url">
				<a :href="'/planet/' + planet.name"> {{ planet.name }}</a>
			</div>
		</div>
		
		<div class="block" style="left:340px">
		<h2> Characters: </h2>
			<div class="list-item" v-for="character in this.actualCharacters" :key="character.url">
				<a :href="'/character/' + character.name"> {{ character.name }}</a>
			</div>	
		</div>

		<div class="block" style="left:630px">
		<h2> Species: </h2>
			<div class="list-item" v-for="species in this.actualSpecies" :key="species.url">
				<p>{{ species.name }}</p>
			</div>	
		</div>

		<div class="block" style="left:920px">
		<h2> Starships: </h2>
			<div class="list-item" v-for="starship in this.actualStarships" :key="starship.url">
				<p>{{ starship.name }}</p>
			</div>	
		</div>

		<div class="block" style="left:1210px">
		<h2> Vehicles: </h2>
			<div class="list-item" v-for="vehicle in this.actualVehicles" :key="vehicle.url">
				<p>{{ vehicle.name }}</p>
			</div>	
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {

		computed: {
			...mapState([ 'characters', 'planets', 'films', 'vehicles', 'species', 'starships']),

			film() {
				return this.films.length != 0 
				? this.films.filter((film) => film.title == this.$route.params.id)[0]
				: '';
			},

			actualPlanets() {
				return this.planets.filter( planet => planet.films.indexOf(this.film.url) != -1);
			},

			actualCharacters() {
				return this.characters.filter( character => character.films.indexOf(this.film.url) != -1);
			},

			actualStarships() {
				return this.starships.filter( starship => starship.films.indexOf(this.film.url) != -1);
			},

			actualVehicles() {
				return this.vehicles.filter( vehicle => vehicle.films.indexOf(this.film.url) != -1);
			},

			actualSpecies() {
				return this.species.filter( species => species.films.indexOf(this.film.url) != -1);
			},
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
	.block {
		position: absolute;
		width: 250px;
		top: 170px;
		left: 50px;
		margin-bottom: 15px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		border-radius: 2px;
		padding: 10px;
		background-color: rgb(255, 255, 210)
	}

	.list-item {
		width: 200px;
		margin: auto;
		height: auto;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		border-radius: 2px;
		padding: 10px;
		padding-right: 20px;
		margin-bottom: 10px;
		transition: box-shadow 0.3s;
		word-wrap: break-word;
		position: relative;
	}
</style>
