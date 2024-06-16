<template>
  <div id="app">
    <HeaderZone />
    <ContentZone />
    <FooterZone />
  </div>
</template>

<script>
import HeaderZone from './components/HeaderZone.vue'
import ContentZone from './components/ContentZone.vue'
import FooterZone from './components/FooterZone.vue'

export default {
  name: 'App',
  components: {
    HeaderZone,
    ContentZone,
    FooterZone
  }
}
</script>

<style></style>
