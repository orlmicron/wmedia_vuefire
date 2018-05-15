<template>
	<div>
		<template v-if="persona">
			<h1 v-text="datosPersona.nombre"></h1>
			<h2 v-text="datosPersona.correoe"></h2>
			<img :src="datosPersona.foto" :alt="datosPersona.nombre">
		</template>
		<div v-else class="spinner"></div>
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

<style>
.spinner {
  width: 40px;
  height: 40px;
  background-color: #333;

  margin: 100px auto;
  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
  animation: sk-rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes sk-rotateplane {
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
}
</style>