<template>
  <div class="flex-col">
    <div class="flex items-center">
      <span class="text-white project-title">{{ title }}</span>
      <div class="line"></div>
    </div>
    <div class="relative mx-auto mt-3">
      <img
        class="h-full w-full"
        src="@/assets/pepicons.png"
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
      default: '@/assets/pepicons.png',
    },
  },
}
</script>
