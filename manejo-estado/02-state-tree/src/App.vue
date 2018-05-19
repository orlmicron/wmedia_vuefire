<template>
<h1>Hola, mi nombre es {{ nombres }} {{ apellidos }} y soy {{ profesion }}</h1>
</template>

<script>
  import {mapState} from 'vuex'
export default {
  name: 'app',
  computed: mapState(["nombres", "apellidos", "profesion"])
  /*computed: mapState({
    nombre(state) {
      return state.nombres
    },
    apellidos(state) {
      return state.apellidos
    }
  })*/
  /*computed: {
    nombre() {
      return this.$store.state.nombres
    }
  }*/
}
</script>

<style>

</style>
