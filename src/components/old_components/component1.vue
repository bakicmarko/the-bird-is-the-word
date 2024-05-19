<template>
  <div class="component1-container">
    <span class="component1-answer1">{{ Answer1 }}</span>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  props: {
    Answer1: {
      type: String,
      default: 'Hollow bones for increased agility and lighter weight.',
    },
  },
}
</script>

<style scoped>
.component1-container {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  box-shadow: 0px 0px 50px 5px #5228f5;
  margin-top: var(--dl-space-space-twounits);
  min-height: 300px;
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
  background-color: rgba(82, 40, 245, 0.85);
}
.component1-answer1 {
  color: rgb(255, 255, 255);
  font-size: 32px;
  align-self: center;
  text-align: center;
  font-family: "Raleway";
  font-weight: 600;
  line-height: 1.5;
  text-transform: none;
  text-decoration: none;
}
</style>
