
<template>
	<div :style="{display: this.planet == '' ? 'none' : 'block'}">
		<h1> Detailed info for planet "{{this.planet != '' ? this.planet.name : "" }}" </h1>
		<div class="block">
		 <p>Rotation period: {{this.planet.rotation_period}} days</p>
		 <p>Orbital period: {{this.planet.orbital_period}} days</p>
		 <p>Diameter: {{this.planet.diameter}}km</p>
		 <p>Climate: {{this.planet.climate}}</p>
		 <p>Gravity: {{this.planet.gravity}} G</p>
		 <p>Water surface: {{this.planet.surface_water}}%</p>
		<p>Population: {{this.planet.population}} creatures</p>
		<p>Terrain: {{this.planet.terrain}}</p>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {

		computed: {
			...mapState([ 'planets']),

			planet() {
				return this.planets.length != 0 
				? this.planets.filter((planet) => planet.name == this.$route.params.id)[0]
				: '';
			},
		},

		async created() {
			if (this.planets.length !== 0) return;
			this.$store.dispatch('getPlanets');
		},
	};
</script>

<style lang="scss" scoped>
	.block {
		margin: auto;
		width: 250px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		border-radius: 2px;
		padding: 10px;
		background-color: rgb(255, 255, 210)
	}

</style>
