<template>
  <div id="app">
    <Page class="page" />
    <Bar class="bar" />
  </div>
</template>

<script>
import Bar from './components/Bar'
import Page from './components/Page.vue'
export default {
  name: 'App',
  components: {
    Page,
    Bar
  }
}
</script>

<style>
.page {
  display: inline-block;
}
.bar {
  display: inline-block;
  position: relative;
  top: -100px;
  left: 20px;
}
</style>
