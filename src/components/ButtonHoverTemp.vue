<template>
  <div class="relative" @mouseover="setHoverOn" @mouseleave="setHoverOff">
    <button
      id="cy-button"
      class="absolute bg-white border-2 border-white hover:bg-btn-light-green focus:outline-none focus:bg-btn-light-green focus:border-btn-bright-green text-black button-text py-3 px-4 inline-flex items-center"
      @click="$emit('click')"
    >
      <svg
        class="fill-current w-5 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 13.9 17"
      >
        <path
          d="M11.332,2.734V0h-8.5V2.734H0v8.2H2.832V13.9H5.9V10.937H8.5V13.9h3.07V10.937H17v-8.2Zm-2.595,5.7H5.9V5.7H8.737Zm5.43,0H11.332V5.7h2.835Z"
        />
      </svg>
      <span>Contact Us</span>
    </button>
    <canvas
      v-show="hover"
      class="absolute"
      style="z-index: 1; width: 161px; height: 46px"
    >
    </canvas>
  </div>
</template>
<script>
export default {
  name: 'ButtonHoverTemp',
  components: {},
  data() {
    return {
      hover: false,
    }
  },
  mounted() {
    // var btn = document.getElementById('cy-button')
    // var btnWidth = btn.offsetWidth
    // var btnHeight = btn.offsetHeight
    // console.log(btnHeight)
    let width = 161
    let height = 46
    var canvasHidden = document.createElement('canvas')
    var ctxHidden = canvasHidden.getContext('2d')
    var canvasShown = document.querySelector('canvas')
    canvasShown.width = width
    canvasShown.height = height
    var ctxShown = canvasShown.getContext('2d')

    function init() {
      canvasHidden.width = width
      canvasHidden.height = height

      // ctxHidden.clearRect(0, 0, ctxHidden.width, ctxHidden.height)
      // ctxHidden.fillText(' ', width, height)

      // ctxShown.clearRect(0, 0, width, height)
      // ctxShown.drawImage(canvasHidden, 0, 0)
      var i = 5
      while (i--) {
        glitch()
      }
    }

    function glitch() {
      var swidth = 161 - Math.random() * 100
      var sheight = 46 - Math.random() * 100
      var dwidth = 80 - Math.random() * 100
      var dheight = 23 - Math.random() * 100

      var x = Math.random() * 161
      var y = Math.random() * 46
      var dx = x + (Math.random() * 100 - 20)
      var dy = y + (Math.random() * 100 - 15)

      ctxShown.clearRect(x, y, swidth, sheight)
      ctxShown.fillStyle = '#000'
      ctxShown.fillRect(x, y, dwidth, dheight)
      ctxShown.drawImage(
        canvasHidden,
        x,
        y,
        swidth,
        sheight,
        dx,
        dy,
        dwidth,
        dheight
      )
    }

    let setGlitch = setInterval(function () {
      init()
    }, 1000 / 15)
  },
  methods: {
    setHoverOn() {
      this.hover = true
    },
    setHoverOff() {
      this.hover = false
    },
  },
}
</script>
<style scoped>
/* html,
body {
  padding: 0px;
  margin: 0px;
  background: #191a1d;
  font-family: 'VT323', monospace;
  color: #fff;
  height: 100%;
} */

/* canvas {
  background: none;
  margin: auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
} */
</style>
