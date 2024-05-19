<template>
  <div class="component2-container">
    <span class="component2-answer1 ContentBold">{{ Answer1 }}</span>
  </div>
</template>

<script>
export default {
  name: 'Component2',
  props: {
    Answer1: {
      type: String,
      default: 'Hollow bones for increased agility and lighter weight.',
    },
  },
}
</script>

<style scoped>
.component2-container {
  flex: 1;
  display: flex;
  position: relative;
  align-self: stretch;
  box-shadow: 0px 0px 50px 5px #5228f5;
  margin-top: var(--dl-space-space-twounits);
  min-height: var(--dl-size-size-xxxlarge);
  transition: 0.3s;
  align-items: center;
  margin-left: var(--dl-space-space-twounits);
  padding-top: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-unit);
  border-radius: 5%;
  margin-bottom: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: center;
  background-color: var(--dl-color-primary1-blue60);
}
.component2-container:hover {
  background-color: #5228f5;
}
.component2-container:active {
  opacity: 0.5;
}
.component2-answer1 {
  color: var(--dl-color-gray-white);
  align-self: center;
  text-align: center;
}
</style>
