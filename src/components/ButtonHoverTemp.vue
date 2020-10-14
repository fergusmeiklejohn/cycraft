<template>
  <div>
    <canvas> </canvas>
    <CyButton>Contact Us</CyButton>
  </div>
</template>
<script>
import CyButton from './CyButton.vue'
export default {
  name: 'ButtonHoverTemp',
  components: {
    CyButton,
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

      ctxHidden.clearRect(0, 0, ctxHidden.width, ctxHidden.height)
      ctxHidden.textAlign = 'center'
      ctxHidden.textBaseLine = 'middle'
      ctxHidden.font = 'bold 100px VT323, monospace'
      ctxHidden.fillStyle = 'black'

      ctxHidden.fillText(' ', width, height)

      ctxShown.clearRect(0, 0, width, height)
      ctxShown.drawImage(canvasHidden, 0, 0)
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
      ctxShown.fillStyle = '#4a6'
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

    setInterval(function () {
      init()
    }, 1000 / 2)
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
