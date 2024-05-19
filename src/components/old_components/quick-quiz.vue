<template>
  <div class="quick-quiz-container">
    <div class="quick-quiz-container01">
      <div class="quick-quiz-container02">
        <div class="quick-quiz-question"><h1>{{ heading }}</h1></div>
        <div class="quick-quiz-question1">
          <p class="quick-quiz-question-txt heading2">{{ QuestionTXT }}</p>
        </div>
      </div>
      <div class="quick-quiz-container03">
        <div class="quick-quiz-container04">
          <div class="quick-quiz-container05">
            <div class="quick-quiz-container06">
              <div class="quick-quiz-container07">
                <div class="quick-quiz-container08"></div>
                <div class="quick-quiz-container09">
                  <span class="quick-quiz-score Large">{{ Score }}</span>
                  <span class="quick-quiz-num-of-quesctions Meduim">
                    {{ numOfQuesctions }}
                  </span>
                </div>
                <div class="quick-quiz-container10"></div>
              </div>
              <div class="quick-quiz-separator"></div>
            </div>
          </div>
          <div class="quick-quiz-container11">
            <div class="quick-quiz-answers">
              <answer-correct-active></answer-correct-active>
              <answer-correct-active></answer-correct-active>
            </div>
            <div class="quick-quiz-answers-part2">
              <answer-worng-active></answer-worng-active>
              <answer-worng-active></answer-worng-active>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnswerCorrectActive from './answer-correct-active'
import AnswerWorngActive from './answer-worng-active'

export default {
  name: 'QuickQuiz',
  props: {
    heading: {
      type: String,
      default: 'Question 2:',
    },
    QuestionTXT: {
      type: String,
      default:
        'What unique adaptation helps birds maintain balance during flight?',
    },
    Score: {
      type: String,
      default: '90',
    },
    numOfQuesctions: {
      type: String,
      default: '/ 100',
    },
  },
  components: {
    AnswerCorrectActive,
    AnswerWorngActive,
  },
}
</script>

<style scoped>
.quick-quiz-container {
  flex: 0 0 auto;
  width: 70%;
  display: flex;
  position: relative;
  margin-top: var(--dl-space-space-fourunits);
  align-items: center;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: column;
}
.quick-quiz-container01 {
  flex: 0 0 auto;
  width: 80%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.quick-quiz-container02 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.quick-quiz-question {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.quick-quiz-question1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.quick-quiz-question-txt {
  text-align: center;
}
.quick-quiz-container03 {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  flex-direction: column;
}
.quick-quiz-container04 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-fourunits);
  box-shadow: 10px 10px 40px var(--dl-color-primary1-blue80);
  transition: 0.3s;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
}
.quick-quiz-container04:focus-within {
  box-shadow: 10px 10px 40px var(--dl-color-success-300);
}
.quick-quiz-container05 {
  flex: 0 0 auto;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-fourunits);
  justify-content: center;
}
.quick-quiz-container06 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.quick-quiz-container07 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.quick-quiz-container08 {
  flex: 1;
  width: auto;
  height: 100px;
  display: flex;
  align-self: flex-end;
  align-items: flex-end;
}
.quick-quiz-container09 {
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.quick-quiz-score {
  color: var(--dl-color-primary1-blue80);
}
.quick-quiz-num-of-quesctions {
  color: var(--dl-color-gray-500);
}
.quick-quiz-container10 {
  flex: 1;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.quick-quiz-separator {
  flex: 0 0 auto;
  width: 100%;
  height: 2px;
  display: flex;
  border-color: var(--dl-color-primary1-blue60);
  border-style: solid;
  border-width: 2px;
  flex-direction: column;
}
.quick-quiz-container11 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.quick-quiz-answers {
  width: 90%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.quick-quiz-answers-part2 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
