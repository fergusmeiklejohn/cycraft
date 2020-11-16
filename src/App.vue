<template>
  <div id="app" class="bg-black flex justify-center">
    <!-- Left glitches descending order -->
    <img src="@/assets/LeftSideGlitch.png" class="side-glitch-1">
    <img src="@/assets/LeftSideGlitch.png" class="side-glitch-2">
    <img src="@/assets/LeftSideGlitch.png" class="side-glitch-3">
    <img src="@/assets/LeftSideGlitch.png" class="side-glitch-4">
     <!-- Right glitches descending order -->
    <img src="@/assets/RightSideGlitch.png" class="side-glitch-5">
    <img src="@/assets/RightSideGlitch.png" class="side-glitch-6">
    <img src="@/assets/RightSideGlitch.png" class="side-glitch-7">
    <img src="@/assets/RightSideGlitch.png" class="side-glitch-8">

    <CyCraftHomePage />
  </div>
</template>

<script>
import CyCraftHomePage from './components/CyCraftHomePage.vue'

export default {
  name: 'App',
  components: {
    CyCraftHomePage,
  },
}
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap')
@import './assets/styles.css'
body
  overscroll-behavior-y: none
  overscroll-behavior-x: none

.side-glitch-1
  position: absolute
  left: 0
  top: 120px

.side-glitch-2
  position: absolute
  left: 0
  top: 1200px

.side-glitch-3
  position: absolute
  left: 0
  top: 2400px

.side-glitch-4
  position: absolute
  left: 0
  top: 3300px

.side-glitch-5
  position: absolute
  right: 0
  top: 400px

.side-glitch-6
  position: absolute
  right: 0
  top: 1700px

.side-glitch-7
  position: absolute
  right: 0
  top: 2800px

.side-glitch-8
  position: absolute
  right: 0
  top: 3700px

</style>
