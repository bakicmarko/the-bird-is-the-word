<template>
  <div class="quiz-container">
    <app-header1 rootClassName="header1-root-class-name1"></app-header1>
    <div id="quizIntro" class="quiz-intro-text">
      <div class="quiz-container01 width-wrapper">
        <div class="quiz-container02">
          <div class="quiz-container03">
            <h2 class="quiz-text heading2 bold">
              <span>ChatGPT transformira učenje u uzbudljivu leteću avanturu</span>
            </h2>
          </div>
          <button @click="showQuiz" class="quiz-hero-button1 heading4 button">
            <span class="quiz-text4 heading4 bold">
              <span>Započni kviz</span>
            </span>
          </button>
          <div v-if="lastQuizScore" class="quiz-intro-score">
            <span class="heading3">Last score:&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <span class="quiz-score heading1">{{ lastQuizScore }}</span>
            <span class="quiz-num-of-quesctions heading2">/ {{ numberOfQuestions }}</span>
          </div>
          <div v-if="lastQuizScore">
            <button @click="reload" class="quiz-hero-button1 heading4 button">
              <span class="quiz-text4 heading3 bold">
                <span>Novi kviz?</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="quizQuiz" class="quiz-container04">
      <div v-if="currentQuestion" class="quiz-container04">
        <div class="quiz-container05">
          <div class="quiz-container06">
            <div class="quiz-container07">
              <div class="quiz-question heading3">
                <h1>QUESTION {{ currentQuestionID + 1 }}:</h1>
              </div>
              <div class="quiz-question1">
                <p class="quiz-question-txt heading2">
                  {{ currentQuestion.questionText }}
                </p>
              </div>
              <div v-if="currentQuestion.imageUrl" class="quiz-question-image-container">
                <div class="quiz-question-image-container-image-wrapper">
                  <img alt="profile" :src=currentQuestion.imageUrl />
                </div>
              </div>
            </div>
            <div class="quiz-container08">
              <div class="quiz-container09">

                <div v-if="currentQuestion" class="quiz-container16">
                  <div class="quiz-answers">
                    <answer-correct-active @click="checkAnswer2(0)" :Answer1="`${currentQuestion.answers[0]}`"
                      :answer-id="0"></answer-correct-active>
                    <answer-correct-active @click="checkAnswer2(1)" :Answer1="`${currentQuestion.answers[1]}`"
                      :answer-id="1"></answer-correct-active>
                  </div>
                  <div class="quiz-answers-part2">
                    <answer-correct-active @click="checkAnswer2(2)" :Answer1="`${currentQuestion.answers[2]}`"
                      :answer-id="2"></answer-correct-active>
                    <answer-correct-active @click="checkAnswer2(3)" :Answer1="`${currentQuestion.answers[3]}`"
                      :answer-id="3"></answer-correct-active>
                  </div>
                  <div class="quiz-container10">
                    <div class="quiz-container11">
                      <div class="quiz-separator"></div>
                      <div class="quiz-container12">
                        <div class="quiz-container13"></div>
                        <div class="quiz-container14">
                          <span class="quiz-score heading1">{{ score }}</span>
                          <span class="quiz-num-of-quesctions heading2">/ {{ numberOfQuestions }}</span>
                        </div>
                        <div class="quiz-container15"></div>
                      </div>

                    </div>
                  </div>
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
import AppFooter from '../components/footer'

export default {
  name: 'Quiz',
  components: {
    AppHeader1,
    AnswerCorrectActive,
    AppFooter,
  },
  data() {
    return {
    }
  },
  computed: {

    numberOfQuestions() {
      return this.$store.getters.getNumberOfQuestions;
    },
    questions() {
      return this.$store.getters.getQuestions;
    },
    currentQuestionID() {
      return this.$store.getters.getCurrentQuestionID;
    },

    currentQuestion() {
      return this.$store.getters.getCurrentQuestion;
    },


    score() {
      return this.$store.getters.getScore;
    },
    lastQuizScore() {
      return this.$store.getters.getLastQuizScore;
    }
  },
  methods: {
    showQuiz() {
      console.log('/quiz Show  Quizz');
      const quizDiv = document.getElementById('quizQuiz');
      const introDiv = document.getElementById('quizIntro');
      console.log(this.questions)
      console.log(this.currentQuestionID)
      quizDiv.style.display = 'flex';
      introDiv.style.display = 'none';
    },
    hideQuiz() {
      console.log('/quiz Hide Quizz');
      const quizDiv = document.getElementById('quizQuiz');
      const introDiv = document.getElementById('quizIntro');
      quizDiv.style.display = 'none';
      introDiv.style.display = 'flex';
    },
    correctAnswer() {
      console.log("correct")
      if (this.score != this.numberOfQuestions) {
        this.$store.commit('updateScoreUp');
      }
      if (this.currentQuestionID != this.numberOfQuestions - 1) {
        this.nextQuestion();
      } else {
        this.resetQuiz();
      }
    },
    nextQuestion() {
      this.$store.commit('updateNextQuestion');
    },
    wrongAnswer() {
      console.log("wrong")
      if (this.currentQuestionID != this.numberOfQuestions - 1) {
        this.nextQuestion();
      } else {
        this.resetQuiz();
      }
    },
    checkAnswer2(answerID) {
      // console.log(element)
      var timeout = 1000;
      const element = document.querySelector(`.answer-correct-active-answer-correct-active[answer-id="${answerID}"]`);
      const elementParentContainer = document.querySelector('.quiz-container09');
      const id = element.getAttribute('answer-id');
      const correctElement = document.querySelector(`.answer-correct-active-answer-correct-active[answer-id="${this.currentQuestion.correctAnswerId}"]`);
      if (id == this.currentQuestion.correctAnswerId) {
        // correct
        element.style.backgroundColor = 'var(--dl-color-success-300)';
        element.style.boxShadow = '10px 10px 20px 0px var(--dl-color-success-300)';
        elementParentContainer.style.boxShadow = '10px 10px 20px 0px var(--dl-color-success-300)';

        timeout = 1000;
        setTimeout(() => {
          this.correctAnswer();
        }, timeout);
      } else {
        // wrong answ//
        element.style.backgroundColor = 'var(--dl-color-danger-300)';
        element.style.boxShadow = '10px 10px 20px 0px var(--dl-color-danger-300)';
        elementParentContainer.style.boxShadow = '10px 10px 20px 0px var(--dl-color-danger-300)';

        timeout = 2000;
        setTimeout(() => {
          this.wrongAnswer(); // Revert to the default color or specify another color
        }, timeout);

      }


      correctElement.style.backgroundColor = 'var(--dl-color-success-300)';
      correctElement.style.boxShadow = '10px 10px 20px 0px var(--dl-color-success-300)';

      setTimeout(100);

      setTimeout(() => {
        element.style.backgroundColor = ''; // Revert to the default color or specify another color
        element.style.boxShadow = '';
        elementParentContainer.style.boxShadow = '';

        correctElement.style.backgroundColor = '';
        correctElement.style.boxShadow = '';
      }, timeout);
    },

    resetQuiz() {
      this.lastQuizScore = this.score;
      console.log(this.score)
      console.log(this.lastQuizScore)
      this.hideQuiz();
      this.$store.commit('updateResetQuiz');
    },

    reload() {
      location.reload();
    }
  },
  metaInfo: {
    title: 'Quiz - Bird is The Word',
    meta: [
      {
        property: 'og:title',
        content: 'Quiz - Bird is The Word',
      },
    ],
  },
}
</script>

<style scoped>
#quizIntro {
  display: flex;
  /* Set to 'block' by default */
}

#quizQuiz {
  display: none;
  /* Set to 'block' by default */
}

.quiz-question-image-container-image-wrapper img {
  width: 70%;
  height: auto;
  max-height: 300px;
  display: block;
  margin: auto;
}

.quiz-question-image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.quiz-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.quiz-intro-text {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

}

.quiz-intro-score {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--dl-space-space-sixunits);
}

html,
body {
  height: 100%;
}

.quiz-container01 {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 15%;
}

.quiz-container02 {
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.quiz-container03 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.quiz-text {
  color: rgb(0, 0, 0);
  margin-top: var(--dl-space-space-sixunits);
  margin-bottom: var(--dl-space-space-sixunits);
  font-size: xx-large;
}

.quiz-hero-button1 {
  color: var(--dl-color-gray-white);
  display: flex;
  opacity: 1;
  align-self: center;
  transition: 0.3s;
  font-weight: bold;
  border-radius: 45px;
  margin-bottom: var(--dl-space-space-sixunits);
  justify-content: center;
}

.quiz-hero-button1:hover {
  color: var(--dl-color-gray-white);
  border-color: rgba(41, 20, 119, 0.9);
  background-color: rgba(41, 20, 119, 0.9);
}

.quiz-hero-button1:disabled {
  background-color: rgba(41, 20, 119, 0.5);
}

.quiz-text4 {
  color: var(--dl-color-gray-white);
  font-size: x-large;
}

.quiz-container04 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #D9D9D9;
}

.quiz-container05 {
  flex: 0 0 auto;
  width: 55%;
  display: flex;
  position: relative;
  margin-top: var(--dl-space-space-fourunits);
  align-items: center;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: column;
  margin-bottom: 10%;
}

.quiz-container06 {
  flex: 0 0 auto;
  width: 80%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.quiz-container07 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.quiz-question {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: large;
  font-weight: lighter;
}

.quiz-question1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.quiz-question-txt {
  text-align: center;
  font-size: 100%;
  font-weight: bolder;
}

.quiz-container08 {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  flex-direction: column;
}

.quiz-container09 {
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



.quiz-container10 {
  flex: 0 0 auto;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  margin-top: var(--dl-space-space-fourunits);
  justify-content: center;
}

.quiz-container11 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.quiz-container12 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.quiz-container13 {
  flex: 1;
  width: auto;
  display: flex;
  align-self: flex-end;
  align-items: flex-end;
}

.quiz-container14 {
  align-self: end;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.quiz-score {
  color: var(--dl-color-primary1-blue80);
}

.quiz-num-of-quesctions {
  color: var(--dl-color-gray-500);
  align-self: flex-end;
}

.quiz-container15 {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.quiz-separator {
  flex: 0 0 auto;
  width: 100%;
  height: 2px;
  display: flex;
  border-color: var(--dl-color-primary1-blue60);
  border-style: solid;
  border-width: 2px;
  flex-direction: column;
}

.quiz-container16 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.quiz-answers {
  width: 90%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}

.quiz-answers-part2 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
