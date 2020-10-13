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
    var btn = document.getElementById('cy-button')
    var btnWidth = btn.offsetWidth
    var btnHeight = btn.offsetHeight
    console.log(btnHeight)
    var canvasHidden = document.createElement('canvas')
    var ctxHidden = canvasHidden.getContext('2d')
    var canvasShown = document.querySelector('canvas')
    canvasShown.width = btnWidth
    canvasShown.height = btnHeight
    var ctxShown = canvasShown.getContext('2d')

    function init() {
      canvasHidden.width = btnWidth
      canvasHidden.height = btnHeight

      ctxHidden.clearRect(0, 0, ctxHidden.width, ctxHidden.height)
      ctxHidden.textAlign = 'center'
      ctxHidden.textBaseLine = 'middle'
      ctxHidden.font = 'bold 40px VT323, monospace'
      ctxHidden.fillStyle = 'white'

      ctxHidden.fillText(
        '■■■■■■',
        canvasHidden.width / 2,
        canvasHidden.height / 2
      )

      ctxShown.clearRect(0, 0, canvasShown.width, canvasShown.height)
      ctxShown.drawImage(canvasHidden, 0, 0)
      var i = 10
      while (i--) {
        glitch()
      }
    }

    function glitch() {
      var width = 161 + Math.random() * 100
      var height = 46 + Math.random() * 50

      var x = Math.random() * canvasHidden.width
      var y = Math.random() * canvasHidden.height

      var dx = x + (Math.random() * 40 - 20)
      var dy = y + (Math.random() * 30 - 15)

      ctxShown.clearRect(x, y, width, height)
      ctxShown.fillStyle = '#4a6'
      ctxShown.fillRect(x, y, width, height)
      ctxShown.drawImage(
        canvasHidden,
        x,
        y,
        width,
        height,
        dx,
        dy,
        width,
        height
      )
    }

    setInterval(function () {
      init()
    }, 1000 / 1)
  },
}
</script>
<style scoped>
html,
body {
  padding: 0px;
  margin: 0px;
  background: #191a1d;
  font-family: 'VT323', monospace;
  color: #fff;
  height: 100%;
}

canvas {
  background: none;
  margin: auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
