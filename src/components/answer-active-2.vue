<template>
  <div :answer-id="answerId" class="answer-active-2">
    <span class="answer-active-2-answer1 ">{{ Answer1 }}</span>
  </div>
</template>

<script>
export default {
  name: 'AnswerActive2',
  props: {
    Answer1: {
      type: String,
      default: 'Hollow bones for increased agility and lighter weight.',
    },
    answerId: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scoped>
.answer-active-2 {
  display: flex;
  position: relative;
  align-self: stretch;
  box-shadow: 10px 10px 20px 0px var(--dl-color-primary1-blue80);
  min-width: var(--dl-size-size-xlarge);
  transition: 0.3s;
  align-items: center;
  margin: var(--dl-space-space-threeunits);
  padding-top: 5%;
  padding-bottom: 5%;
  width: 35%;
  /*margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
  */
  border-radius: 5%;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-primary1-blue60);
}

.answer-active-2:hover {
  background-color: var(--dl-color-primary1-blue80);
}



.answer-active-2-answer1 {
  color: var(--dl-color-gray-white);
  align-self: center;
  text-align: center;
}
</style>
