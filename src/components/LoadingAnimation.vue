<template>
  <div class="h-full flex flex-col justify-center items-center bg-black">
    <div
      id="loading-animation"
      class="w-auto bg-black"
    ></div>
  </div>
</template>
<script>
import lottie from 'lottie-web'
export default {
  name: 'LoadingAnimation',
  mounted() {
    let loadingContainer = document.getElementById('loading-animation')
    console.log(loadingContainer)
    lottie.loadAnimation({
      container: loadingContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `./animation/data.json`,
    })
  },
}
</script>