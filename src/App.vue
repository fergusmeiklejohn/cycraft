<template>
  <div id="app" class="bg-black flex justify-center">
    <!-- <CyCraftHomePage /> -->
    <TestPage />
  </div>
</template>

<script>
import CyCraftHomePage from './components/CyCraftHomePage.vue'
import TestPage from './components/TestPage.vue'

export default {
  name: 'App',
  components: {
    // CyCraftHomePage,
    TestPage,
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap');
@import './assets/styles.css';
</style>
