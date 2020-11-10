<template>
  <div id="app" class="bg-black flex justify-center">
    <!-- Left glitches descending order -->
    <side-glitch position="side-glitch-1" />
    <side-glitch position="side-glitch-2" />
    <side-glitch position="side-glitch-3" />
    <side-glitch position="side-glitch-4" />
    <!-- Right glitches descending order -->
    <side-glitch position="side-glitch-5" />
    <side-glitch position="side-glitch-6" />
    <side-glitch position="side-glitch-7" />
    <side-glitch position="side-glitch-8" />

    <CyCraftHomePage />
  </div>
</template>

<script>
import CyCraftHomePage from './components/CyCraftHomePage.vue'
import SideGlitch from './components/SideGlitch'

export default {
  name: 'App',
  components: {
    CyCraftHomePage,
    SideGlitch,
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap');
@import './assets/styles.css';
.side-glitch-1 {
  position: absolute;
  left: 0;
  margin-left: -8.5rem;
  top: 120px;
}
.side-glitch-2 {
  position: absolute;
  left: 0;
  margin-left: -8.5rem;
  top: 1200px;
}
.side-glitch-3 {
  position: absolute;
  left: 0;
  margin-left: -8.5rem;
  top: 2400px;
}
.side-glitch-4 {
  position: absolute;
  left: 0;
  margin-left: -8.5rem;
  top: 3300px;
}
.side-glitch-5 {
  position: absolute;
  right: 0;
  margin-right: -8.5rem;
  top: 400px;
}
.side-glitch-6 {
  position: absolute;
  right: 0;
  margin-right: -8.5rem;
  top: 1700px;
}
.side-glitch-7 {
  position: absolute;
  right: 0;
  margin-right: -8.5rem;
  top: 2800px;
}
.side-glitch-8 {
  position: absolute;
  right: 0;
  margin-right: -8.5rem;
  top: 3700px;
}
</style>
