<template>
  <div class="flex-col">
    <div class="flex items-center">
      <span class="text-white project-title">{{ title }}</span>
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
