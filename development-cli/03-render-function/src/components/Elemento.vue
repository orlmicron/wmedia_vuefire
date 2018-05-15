<!-- <template>
  <aside v-if="tipo == 'aside'">
    <slot></slot>
  </aside>
  <section v-else-if="tipo == 'section'">
    <slot></slot>
  </section>
  <footer v-else-if="tipo == 'footer'">
    <slot></slot>
  </footer>
  <header v-else-if="tipo == 'header'">
    <slot></slot>
  </header>
  <main v-else-if="tipo == 'main'">
    <slot></slot>
  </main>
  <div v-else>
    <slot></slot>
  </div>
</template> -->

<script>
  export default {
    props: ["tipo"],
    render(createElement) {
      return createElement(
        this.tipo,
        this.$slots.default
        )
    }

  }
</script>

<style>
  
</style>