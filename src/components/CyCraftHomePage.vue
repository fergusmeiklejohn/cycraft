<template>
<div style="max-width: 1366px">
  <div class="flex-col bg-black min-width-full">
    <!-- Mobile Header -->
    <div class="flex content-center justify-between p-3">
      <div class="flex items-center">
        <svg id="Monster" xmlns="http://www.w3.org/2000/svg" width="28" height="23.721" viewBox="0 0 28 23.721">
          <g id="Layer_1" data-name="Layer 1">
            <path id="Path_18" data-name="Path 18" d="M18.665,4.665V0h-14V4.665H0v14H4.665v5.056H9.721V18.665H14v5.056h5.056V18.665H28v-14Zm-4.274,9.726H9.721V9.721h4.67Zm8.944,0h-4.67V9.721h4.67Z" fill="#fff"/>
          </g>
        </svg>
      </div>
      <button class="text-xl text-white" @click="clicked">Contact</button>
    </div>
    <!-- Hero Title -->
    <div class="flex-col justify-center content-center m-10">
      <div class="text-h1 text-white">We Craft without cruft.</div>
      <div class="text-h4 text-white">We craft beautiful apps and strive for a better web.</div>
      <button class="bg-white hover:bg-gray-400 text-black font-bold text-base uppercase py-3 px-4 inline-flex items-center my-20" @click="clicked">
        <svg class="fill-current w-5 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.9 17"><path d="M11.332,2.734V0h-8.5V2.734H0v8.2H2.832V13.9H5.9V10.937H8.5V13.9h3.07V10.937H17v-8.2Zm-2.595,5.7H5.9V5.7H8.737Zm5.43,0H11.332V5.7h2.835Z"/></svg>
        <span>Contact us</span>
      </button>
    </div>

<!-- <svg xmlns="http://www.w3.org/2000/svg" width="13.9" height="17" viewBox="0 0 13.9 17">
  <g id="Monster" transform="translate(13.9) rotate(90)">
    <g id="Layer_1" data-name="Layer 1">
      <path id="Path_18" data-name="Path 18" d="M11.332,2.734V0h-8.5V2.734H0v8.2H2.832V13.9H5.9V10.937H8.5V13.9h3.07V10.937H17v-8.2Zm-2.595,5.7H5.9V5.7H8.737Zm5.43,0H11.332V5.7h2.835Z"/>
    </g>
  </g>
</svg> -->

  </div>
</div>
</template>

<script>
export default {
  name: 'CycraftHomePage',
  props: {},
  methods: {
    clicked(){
      console.log('clicked')
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/typography.sass'
text-h1
  color: #fff
</style>
