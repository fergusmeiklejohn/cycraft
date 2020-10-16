<template>
  <div class="flex justify-center items-center">
    <div class="p-32">
      <OldButton class="glitch-box glitch-text">
        <span aria-hidden="true">Contact Us</span>
        Contact Us
        <span aria-hidden="true">Contact Us</span>
      </OldButton>
    </div>
  </div>
</template>
<script>
import OldButton from './OldButton.vue'
export default {
  components: {
    OldButton,
  },
}
</script>
<style scoped>
.glitch-box {
  box-shadow: 0.05em 0 0 rgba(228, 255, 231, 0.75),
    -0.025em -0.05em 0 rgba(34, 255, 6, 0.75),
    0.025em 0.05em 0 rgba(34, 255, 6, 1);

  animation: glitch-box 500ms infinite;
}

.glitch-box span {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.glitch-box span:first-child {
  animation: glitch-box 650ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-0.025em, -0.0125em);
  /* color: green; */
  opacity: 0.8;
}

.glitch-box span:last-child {
  animation: glitch-box 375ms infinite;
  clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
  transform: translate(0.0125em, 0.025em);
  /* color: red; */
  opacity: 0.8;
}

/* https://web.dev/prefers-reduced-motion/#(bonus)-forcing-reduced-motion-on-all-websites */

@keyframes glitch-box {
  0% {
    box-shadow: 0.2em 0.4em 0 rgba(228, 255, 231, 0.75),
      -0.5em -0.3em 0 rgba(34, 255, 6, 0.75),
      -0.025em 0.05em 0 rgba(34, 255, 6, 1);
  }
  14% {
    box-shadow: 0.2em 0.4em 0 rgba(228, 255, 231, 0.75),
      -0.5em -0.3em 0 rgba(34, 255, 6, 0.75),
      -0.025em 0.05em 0 rgba(34, 255, 6, 1);
  }
  15% {
    box-shadow: 0.1em 0.2em 0 rgba(228, 255, 231, 0.75),
      0.5em 0.3em 0 rgba(34, 255, 6, 0.75), -0.1em 0.05em 0 rgba(34, 255, 6, 1);
  }
  49% {
    box-shadow: 0.1em 0.2em 0 rgba(228, 255, 231, 0.75),
      0.5em 0.3em 0 rgba(34, 255, 6, 0.75), -0.1em 0.05em 0 rgba(34, 255, 6, 1);
  }
  50% {
    box-shadow: 0.1em 0.5em 0 rgba(228, 255, 231, 1),
      0.05em 0 0 rgba(34, 255, 6, 0.75), 0 -0.05em 0 rgba(34, 255, 6, 1);
  }
  99% {
    box-shadow: 0.1em 0.5em 0 rgba(228, 255, 231, 1),
      0.05em 0 0 rgba(34, 255, 6, 0.75), 0 -0.05em 0 rgba(34, 255, 6, 1);
  }
  100% {
    box-shadow: -0.025em 0 0 rgba(228, 255, 231, 0.75),
      -0.025em -0.025em 0 rgba(34, 255, 6, 0.75),
      -0.025em -0.05em 0 rgba(34, 255, 6, 1);
  }
}

.glitch-text {
  text-transform: uppercase;
  position: relative;

  text-shadow: 0.05em 0 0 rgba(228, 255, 231, 0.75),
    -0.025em -0.05em 0 rgba(34, 255, 6, 0.75),
    0.025em 0.05em 0 rgba(34, 255, 6, 1);

  animation: glitch-text 500ms infinite;
}

.glitch-text span {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: 12px;
  padding-left: 24px;
}

.glitch-text span:first-child {
  animation: glitch-text 650ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-0.025em, -0.0125em);
  /* color: green; */
  opacity: 0.8;
}

.glitch-text span:last-child {
  animation: glitch-text 375ms infinite;
  clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
  transform: translate(0.0125em, 0.025em);
  /* color: red; */
  opacity: 0.8;
}

/* https://web.dev/prefers-reduced-motion/#(bonus)-forcing-reduced-motion-on-all-websites */

@keyframes glitch-text {
  0% {
    text-shadow: 0.05em 0 0 rgba(228, 255, 231, 0.75),
      -0.05em -0.025em 0 rgba(34, 255, 6, 0.75),
      -0.025em 0.05em 0 rgba(34, 255, 6, 1);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(228, 255, 231, 0.75),
      -0.05em -0.025em 0 rgba(34, 255, 6, 0.75),
      -0.025em 0.05em 0 rgba(34, 255, 6, 1);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(228, 255, 231, 0.75),
      0.1em 0.1em 0 rgba(34, 255, 6, 0.75),
      -0.05em -0.05em 0 rgba(34, 255, 6, 1);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(228, 255, 231, 0.75),
      0.1em 0.1em 0 rgba(34, 255, 6, 0.75),
      -0.05em -0.05em 0 rgba(34, 255, 6, 1);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(228, 255, 231, 0.75),
      0.05em 0 0 rgba(34, 255, 6, 0.75), 0 -0.05em 0 rgba(34, 255, 6, 1);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(228, 255, 231, 0.75),
      0.05em 0 0 rgba(34, 255, 6, 0.75), 0 -0.05em 0 rgba(34, 255, 6, 1);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(228, 255, 231, 0.75),
      -0.025em -0.025em 0 rgba(34, 255, 6, 0.75),
      -0.025em -0.05em 0 rgba(34, 255, 6, 1);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
}
</style>
