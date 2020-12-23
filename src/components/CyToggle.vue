<template>
  <button
    type="button"
    aria-pressed="false"
    :class="isOn ? 'bg-toggle-gray' : 'bg-black'"
    class="relative inline-flex flex-shrink-0 h-7 w-12 border-2 border-white rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
    @click="toggle"
  >
    <span class="sr-only">Use setting</span>
    <span
      :class="isOn ? 'translate-x-6'  : 'translate-x-0'"
      class="relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
    >
      <span
        :class="isOn ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'"
        class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
        aria-hidden="true"
      >
        <svg
          class="h-3 w-3 text-gray-400"
          fill="none"
          viewBox="0 0 12 12"
        >
          <path
            d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span
        :class="isOn ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'"
        class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
        aria-hidden="true"
      >
        <svg
          class="h-3 w-3 text-indigo-600"
          fill="currentColor"
          viewBox="0 0 12 12"
        >
          <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
        </svg>
      </span>
    </span>
  </button>
</template>
<script>
export default {
  name: 'CyToggle',
  data() {
    return {
      isOn: false,
    }
  },
  methods: {
    toggle() {
      this.isOn = !this.isOn
      this.$emit('input', this.isOn)
    },
  },
}
</script>
<style lang="sass" scoped>
.cy-toggle
  position: relative
  display: inline-block
  width: 60px
  height: 35px
  border: none
  background: transparent
  outline: none

.cy-toggle input
  opacity: 0
  width: 0
  height: 0

.slider
  position: absolute
  cursor: pointer
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: black
  border-style: solid
  border-width: 2px
  border-color: white
  transition: 0.4s

.slider:before
  position: absolute
  content: ''
  height: 23px
  width: 23px
  left: 4px
  bottom: 4px
  background-color: white
  background-image: url(/cy-icon-black-on-white.svg)
  transition: 0.4s

input:checked + .slider
  background-color: #7c7c7c

input:checked + .slider:before
  background-image: url(/cy-icon-white-on-black.svg)

input:checked + .slider:before
  transform: translateX(26px)

.slider.round
  border-radius: 34px

.slider.round:before
  border-radius: 50%
</style>
