<template>
	<div>
		<template v-if="persona">
			<h1 v-text="datosPersona.nombre"></h1>
			<h2 v-text="datosPersona.correoe"></h2>
			<img :src="datosPersona.foto" :alt="datosPersona.nombre">
		</template>
		<span v-else>Cargando persona...</span>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		created() {
			axios.get('https://randomuser.me/api?results=50')
				.then(respuesta => this.persona = respuesta.data.results[0])
		},
		data() {
			return {
				persona: null,
			}
		},
		computed: {
			datosPersona() {
				return{
					nombre: `${this.persona.name.first} ${this.persona.name.last}`,
					foto: this.persona.picture.large,
					correoe: this.persona.email,
					
				}
			}
		}
	}
</script>

<style></style>