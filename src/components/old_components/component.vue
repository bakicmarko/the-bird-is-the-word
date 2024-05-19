<template>
  <div class="app-component-container">
    <svg viewBox="0 0 877.7142857142857 1024" class="app-component-icon">
      <path
        d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
      ></path>
    </svg>
    <span class="heading4 Content">{{ text }}</span>
    <span class="heading4">{{ text1 }}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppComponent',
  props: {
    text: {
      type: String,
      default: 'scientific name: ',
    },
    text1: {
      type: String,
      default: 'Text',
    },
  },
}
</script>

<style scoped>
.app-component-container {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
}
.app-component-icon {
  fill: #ffffff;
  width: 8px;
  height: 8px;
  margin-right: var(--dl-space-space-halfunit);
}
</style>
