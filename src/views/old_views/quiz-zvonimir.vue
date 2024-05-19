<template>
  <div class="quiz-zvonimir-container">
    <app-header1></app-header1>
    <div class="quiz-zvonimir-container01">
      <div class="quiz-zvonimir-container02">
        <div class="quiz-zvonimir-container03">
          <div class="quiz-zvonimir-question"><h1>Question 2:</h1></div>
          <p class="quiz-zvonimir-question-txt heading2">
            What unique adaptation helps birds maintain balance during flight?
          </p>
          <div class="quiz-zvonimir-container04">
            <div class="quiz-zvonimir-container05">
              <div class="quiz-zvonimir-container06">
                <div class="quiz-zvonimir-answers">
                  <div class="quiz-zvonimir-container07">
                    <span class="quiz-zvonimir-answer1">
                      Hollow bones for increased agility and lighter weight.
                    </span>
                  </div>
                  <div class="quiz-zvonimir-container08">
                    <span class="quiz-zvonimir-answer11">
                      Hollow bones for increased agility and lighter weight.
                    </span>
                  </div>
                </div>
                <div class="quiz-zvonimir-answers-part2">
                  <div class="quiz-zvonimir-container09">
                    <span class="quiz-zvonimir-answer12">
                      Hollow bones for increased agility and lighter weight.
                    </span>
                  </div>
                  <div class="quiz-zvonimir-container10">
                    <span class="quiz-zvonimir-answer13">
                      Hollow bones for increased agility and lighter weight.
                    </span>
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
import AppFooter from '../components/footer'

export default {
  name: 'QuizZvonimir',
  components: {
    AppHeader1,
    AppFooter,
  },
  metaInfo: {
    title: 'Quiz-Zvonimir - Bird is The Word',
    meta: [
      {
        property: 'og:title',
        content: 'Quiz-Zvonimir - Bird is The Word',
      },
    ],
  },
}
</script>

<style scoped>
.quiz-zvonimir-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.quiz-zvonimir-container01 {
  width: 100%;
  height: 1829px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  background-color: #D9D9D9;
}
.quiz-zvonimir-container02 {
  flex: 0 0 auto;
  width: auto;
  height: 1733px;
  display: flex;
  max-width: 70%;
  align-self: center;
  margin-top: var(--dl-space-space-fourunits);
  align-items: center;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: column;
  justify-content: center;
}
.quiz-zvonimir-container03 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.quiz-zvonimir-question {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.quiz-zvonimir-question-txt {
  text-align: center;
}
.quiz-zvonimir-container04 {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  flex-direction: column;
}
.quiz-zvonimir-container05 {
  width: 100%;
  margin: var(--dl-space-space-twounits);
  display: flex;
  padding: var(--dl-space-space-fourunits);
  box-shadow: 10px 10px 40px 0px #5228f5;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
}
.quiz-zvonimir-container06 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.quiz-zvonimir-answers {
  width: 90%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.quiz-zvonimir-container07 {
  flex: 1;
  display: flex;
  position: relative;
  align-self: stretch;
  box-shadow: 0px 0px 50px 5px #5228f5;
  margin-top: var(--dl-space-space-twounits);
  min-height: 400px;
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
  background-color: rgba(82, 40, 245, 0.85);
}
.quiz-zvonimir-container07:hover {
  background-color: #5228f5;
}
.quiz-zvonimir-container07:active {
  opacity: 0.5;
}
.quiz-zvonimir-answer1 {
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
.quiz-zvonimir-container08 {
  flex: 1;
  display: flex;
  position: relative;
  align-self: stretch;
  box-shadow: 0px 0px 50px 5px #5228f5;
  margin-top: var(--dl-space-space-twounits);
  min-height: 400px;
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
.quiz-zvonimir-answer11 {
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
.quiz-zvonimir-answers-part2 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.quiz-zvonimir-container09 {
  flex: 1;
  display: flex;
  position: relative;
  align-self: stretch;
  box-shadow: 0px 0px 50px 5px #5228f5;
  margin-top: var(--dl-space-space-twounits);
  min-height: 400px;
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
.quiz-zvonimir-answer12 {
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
.quiz-zvonimir-container10 {
  flex: 1;
  display: flex;
  position: relative;
  align-self: stretch;
  box-shadow: 0px 0px 50px 5px #5228f5;
  margin-top: var(--dl-space-space-twounits);
  min-height: 400px;
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
.quiz-zvonimir-answer13 {
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
