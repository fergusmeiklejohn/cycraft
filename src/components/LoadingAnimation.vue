<template>
  <div class="h-full flex flex-col justify-center items-center bg-black">
    <div
      id="loading-animation"
      class="w-auto bg-black"
    >
      <img
        src="cycraft-loading-min.gif"
        alt="loading animation"
      >
    </div>
  </div>
</template>
<script>
import lottie from 'lottie-web'
export default {
  name: 'LoadingAnimation',
  //Commented out until we recieve working Lottie animation .json file
  // mounted() {
  //   let loadingContainer = document.getElementById('loading-animation')
  //   lottie.loadAnimation({
  //     container: loadingContainer,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     path: `./animation/data.json`,
  //   })
  // },
}
</script>