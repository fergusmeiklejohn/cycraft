<template>
  <div class="flex-col">
    <div class="title-container">
      <span class="text-white uppercase text-xs tracking-widest">{{
        title
      }}</span>
      <div class="line"></div>
    </div>
    <div class="relative mx-auto mt-3" style="padding-bottom: 100%">
      <img
        class="absolute h-full w-full object-cover"
        src="../assets/martin.jpg"
        alt="Project Photo"
      />
    </div>
  </div>
</template>
<style lang="sass" scoped>
.title-container
  display: flex
  align-items: center
.line
  background: white
  height: 1px
  margin-left: 6px
  width: 100%
</style>
<script>
export default {
  name: 'Project',
  props: {
    textsm: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },
}
</script>
