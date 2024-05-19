<template>
  <div class="quiz1-save-marko-container">
    <app-header1></app-header1>
    <div class="quiz1-save-marko-intro-text">
      <div class="quiz1-save-marko-container01">
        <h2 class="quiz1-save-marko-text heading1 heading2 heading3">
          <span>ChatGPT transforms bird learning into a quiz adventure</span>
          <br />
          <br />
          <span>Gumb &quot;Start quiz&quot;</span>
          <br />
          <span><span v-html="raw9lip"></span></span>
        </h2>
      </div>
    </div>
    <div class="quiz1-save-marko-container02">
      <div class="quiz1-save-marko-container03">
        <div class="quiz1-save-marko-container04">
          <div class="quiz1-save-marko-container05">
            <div class="quiz1-save-marko-question"><h1>Question 2:</h1></div>
            <div class="quiz1-save-marko-question1">
              <p class="quiz1-save-marko-question-txt heading2">
                What unique adaptation helps birds maintain balance during flight?
              </p>
            </div>
          </div>
          <div class="quiz1-save-marko-container06">
            <div class="quiz1-save-marko-container07">
              <div class="quiz1-save-marko-container08">
                <div class="quiz1-save-marko-container09">
                  <div class="quiz1-save-marko-container10">
                    <div class="quiz1-save-marko-container11">
                      <span class="quiz1-save-marko-text8 Meduim">
                        Question 1
                      </span>
                    </div>
                    <div class="quiz1-save-marko-container12">
                      <span class="quiz1-save-marko-score Large">90</span>
                      <span class="quiz1-save-marko-num-of-quesctions Meduim">
                        / 100
                      </span>
                    </div>
                    <div class="quiz1-save-marko-container13"></div>
                  </div>
                  <div class="quiz1-save-marko-separator"></div>
                </div>
              </div>
              <div class="quiz1-save-marko-container14">
                <input
                  type="text"
                  placeholder="correctAnswerTest"
                  class="quiz1-save-marko-textinput input"
                />
              </div>
              <div class="quiz1-save-marko-container15">
                <div class="quiz1-save-marko-answers">
                  <answer-correct-active></answer-correct-active>
                  <answer-correct-active></answer-correct-active>
                </div>
                <div class="quiz1-save-marko-answers-part2">
                  <answer-worng-active></answer-worng-active>
                  <answer-worng-active></answer-worng-active>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader1 from '../components/header1'
import AnswerCorrectActive from '../components/answer-correct-active'
import AnswerWorngActive from '../components/answer-worng-active'
import AppFooter from '../components/footer'

export default {
  name: 'Quiz1SaveMarko',
  components: {
    AppHeader1,
    AnswerCorrectActive,
    AnswerWorngActive,
    AppFooter,
  },
  data() {
    return {
      raw9lip: ' ',
    }
  },
  metaInfo: {
    title: 'Quiz1-save-Marko - Bird is The Word',
    meta: [
      {
        property: 'og:title',
        content: 'Quiz1-save-Marko - Bird is The Word',
      },
    ],
  },
}
</script>

<style scoped>
.quiz1-save-marko-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.quiz1-save-marko-intro-text {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.quiz1-save-marko-container01 {
  flex: 0 0 auto;
  height: auto;
  display: flex;
  max-width: 70%;
  align-items: flex-start;
}
.quiz1-save-marko-text {
  color: rgb(0, 0, 0);
  margin-top: var(--dl-space-space-sixunits);
  margin-bottom: var(--dl-space-space-sixunits);
}
.quiz1-save-marko-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #D9D9D9;
}
.quiz1-save-marko-container03 {
  flex: 0 0 auto;
  display: flex;
  max-width: 70%;
  min-width: 100%;
  margin-top: var(--dl-space-space-fourunits);
  align-items: center;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: column;
}
.quiz1-save-marko-container04 {
  flex: 0 0 auto;
  width: 55%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.quiz1-save-marko-container05 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.quiz1-save-marko-question {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.quiz1-save-marko-question1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.quiz1-save-marko-question-txt {
  text-align: center;
}
.quiz1-save-marko-container06 {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  flex-direction: column;
}
.quiz1-save-marko-container07 {
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
.quiz1-save-marko-container07:focus-within {
  box-shadow: 10px 10px 40px var(--dl-color-success-300);
}
.quiz1-save-marko-container08 {
  flex: 0 0 auto;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-fourunits);
  justify-content: center;
}
.quiz1-save-marko-container09 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.quiz1-save-marko-container10 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.quiz1-save-marko-container11 {
  flex: 1;
  width: auto;
  height: 100px;
  display: flex;
  align-self: flex-end;
  align-items: flex-end;
}
.quiz1-save-marko-text8 {
  color: var(--dl-color-gray-500);
}
.quiz1-save-marko-container12 {
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.quiz1-save-marko-score {
  color: var(--dl-color-primary1-blue80);
}
.quiz1-save-marko-num-of-quesctions {
  color: var(--dl-color-gray-500);
}
.quiz1-save-marko-container13 {
  flex: 1;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.quiz1-save-marko-separator {
  flex: 0 0 auto;
  width: 100%;
  height: 2px;
  display: flex;
  border-color: var(--dl-color-primary1-blue60);
  border-style: solid;
  border-width: 2px;
  flex-direction: column;
}
.quiz1-save-marko-container14 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.quiz1-save-marko-textinput {
  height: var(--dl-size-size-xsmall);
}
.quiz1-save-marko-container15 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.quiz1-save-marko-answers {
  width: 90%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.quiz1-save-marko-answers-part2 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
