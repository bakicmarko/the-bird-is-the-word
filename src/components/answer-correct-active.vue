<template>
  <div :answer-id="answerId" class="answer-correct-active-answer-correct-active">
    <span class="answer-correct-active-answer1 heading3 bold">{{ Answer1 }}</span>
  </div>
</template>

<script>
export default {
  name: 'AnswerCorrectActive',
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
.answer-correct-active-answer-correct-active {
  display: flex;
  position: relative;
  align-self: stretch;
  box-shadow: 10px 10px 20px 0px var(--dl-color-primary1-blue80);
  min-width: var(--dl-size-size-xlarge);
  transition: 0.3s;
  align-items: center;
  margin: var(--dl-space-space-threeunits);
  padding-top: 10%;
  padding-bottom: 10%;
  width: 35%;
  /*
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);

  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
  */
  border-radius: 5%;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-primary1-blue60);
}

.answer-correct-active-answer-correct-active:hover {
  background-color: var(--dl-color-primary1-blue80);
}



.answer-correct-active-answer1 {
  color: var(--dl-color-gray-white);
  align-self: center;
  text-align: center;
}
</style>
