<template>
	<a :href="'/film/' + film.title">
	<div class="film">
		<span>{{ film.title }}</span>
		<br>
		<span>{{ film.release_date }}</span>
	</div>
	</a>
</template>

<script>
	export default {
		name: 'film-item',
		props: {
			film: {
				type: Object,
				required: true,
			},
		},
	};
</script>

<style lang="scss" scoped>
	.film {
		width: 200px;
		height: auto;
		float: left;
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
