<template>
	<main>
		<ul>
			<li v-for="(tarea, index) in tareas" :key="index">{{ tarea.nombre }}</li>
		</ul>
	</main>

</template>

<script>
import {mapState} from 'vuex';

export default {
	// computed: {
	// 	tareas() {
	// 		return this.$store.state.tareas
	// 	}
	// }
	computed: mapState(["tareas"]),
}
</script>

<style>

</style>