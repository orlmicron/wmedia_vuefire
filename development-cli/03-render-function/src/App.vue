<template>
  <div id="app">
    <div class="">
      <h1 v-cloak>{{ title }}</h1>
      <elemento tipo="header">
        <h1>hola header</h1>
      </elemento>
      <elemento tipo="nav">
        <h1>hola nav</h1>
      </elemento>
      <elemento tipo="div">
        <h1>hola div</h1>
      </elemento>
      <elemento tipo="aside">
        <h1>hola aside</h1>
      </elemento>
    </div>
  </div>
</template>

<script>
import elemento from './components/Elemento.vue'
export default {
  components: {elemento},
  data() {
    return {
      title: "Soy un titulo",
    }
  }

}
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
