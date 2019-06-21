<template>
	<div :style="{display: this.person == '' ? 'none' : 'block'}">
		<h1> Detailed info for "{{this.person != '' ? this.person.name : "" }}" </h1>
		<div class="block">
		 <p>Height: {{this.person.height}} sm</p>
		 <p>Mass: {{this.person.mass}} kg</p>
		 <p>Hair color: {{this.person.hair_color}}</p>
		 <p>Skin color: {{this.person.skin_color}}</p>
		 <p>Eye color: {{this.person.eye_color}}</p>
		 <p>Birth year: {{this.person.birth_year}}</p>
		<p>Gender: {{this.person.gender}}</p>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {

		computed: {
			...mapState([ 'characters']),

			person() {
				return this.characters.length != 0 
				? this.characters.filter((person) => person.name == this.$route.params.id)[0]
				: '';
			},
		},

		async created() {
			if (this.characters.length !== 0) return;
			this.$store.dispatch('getCharacters');
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
