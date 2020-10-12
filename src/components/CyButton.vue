<template>
  <button
    id="cy-button"
    class="relative bg-white border-2 border-white hover:bg-btn-light-green focus:outline-none focus:bg-btn-light-green focus:border-btn-bright-green text-black button-text py-3 px-4 inline-flex items-center"
    @click="$emit('click')"
    @mouseover="hover = true"
    @mouseleave="hover = false"
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
    <span><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'CyButton',
  data() {
    return {
      hover: false,
      intervalFunc: null,
    }
  },
  watch: {
    hover: function () {
      if (this.hover) {
        this.intervalFunc = setInterval(function () {
          let glitch = document.getElementsByClassName('box')
          for (let i = 0; i < glitch.length; i++) {
            glitch[i].style.left = Math.floor(Math.random() * 20) + 'vw'
            glitch[i].style.top = Math.floor(Math.random() * 20) + 'vh'
            glitch[i].style.width = Math.floor(Math.random() * 40) + 'px'
            glitch[i].style.height = Math.floor(Math.random() * 20) + 'px'
          }
        }, 200)
      } else {
        let glitch = document.getElementsByClassName('box')
        for (let i = 0; i < glitch.length; i++) {
          glitch[i].remove()
        }
        clearInterval(this.intervalFunc)
      }
    },
  },
  mounted() {
    let btn = document.getElementById('cy-button')
    let count = 20
    for (let i = 0; i < count; i++) {
      let glitchBox = document.createElement('div')
      glitchBox.className = 'box'
      btn.appendChild(glitchBox)
    }
  },
}
</script>
<style lang="scss">
.box {
  position: absolute;
  background: #000;
}
</style>
